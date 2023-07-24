import {
  sendUnaryData,
  ServerUnaryCall,
  ServerErrorResponse
} from '@grpc/grpc-js';

import { RequestApp } from '../infra/middlewares/request';
import { User } from '../model/user';
import { CreateUserReply, CreateUserRequest } from '../proto/model_pb';

class UserController {
  public async createUser(
    call: ServerUnaryCall<CreateUserRequest, CreateUserReply>,
    callback: sendUnaryData<CreateUserReply>
  ): Promise<void> {
    const authorization = call.request.getToken();
    const usuario = call.request.getUsuario();
    const senha = call.request.getSenha();

    const requestApp = new RequestApp(callback, authorization);
    await requestApp.authToken();

    requestApp.dataForLogs.usuario = usuario;
    requestApp.dataForLogs.senha = senha;

    const reply = new CreateUserReply();
    try {
      await User.create(usuario, senha);

      reply.setMessage(`Usuario: ${usuario} criado com sucesso`);
      await requestApp.sendSuccess(reply);
    } catch (error: any) {
      requestApp.returnError({
        message: `Erro ao criar um usuario: ${error}`
      } as ServerErrorResponse);
    }
  }
}

export default new UserController();
