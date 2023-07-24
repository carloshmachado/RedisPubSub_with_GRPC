import { sendUnaryData, ServerErrorResponse } from '@grpc/grpc-js';

import { DataForLogs } from '../../libs/types';
import logger from '../logger';

import { auth } from './auth';

export class RequestApp {
  public dataForLogs: DataForLogs = {};

  private requestMomentIni: number;
  private callback: sendUnaryData<any>;
  public token: string;

  constructor(callback: sendUnaryData<any>, token: string) {
    this.requestMomentIni = new Date().getTime();
    this.callback = callback;
    this.token = token;
  }

  public async authToken(): Promise<void> {
    const result = await auth(this.token);
    if (result) {
      throw new Error(result.message);
    }
  }

  public logSuccess(): void {
    logger.info(`Finished succesfuly`, {
      duration_ms: new Date().getTime() - this.requestMomentIni,
      ...this.dataForLogs
    });
  }

  public logError(error: any): void {
    this.dataForLogs.error = error;
    logger.error('Finished with error', {
      duration_ms: new Date().getTime() - this.requestMomentIni,
      ...this.dataForLogs
    });
  }

  public async returnError(error: ServerErrorResponse): Promise<void> {
    this.logError(error);
    this.callback(error);
  }

  public async sendSuccess(reply: any): Promise<void> {
    this.logSuccess();
    this.callback(null, reply);
  }
}
