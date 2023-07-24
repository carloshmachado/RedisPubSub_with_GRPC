import { Server, ServerCredentials } from '@grpc/grpc-js';

import config from './config';
import {
  UserController
} from './controller';
import { PostgresDB } from './infra/PrismaDB/postgresDB';
import { ModelService } from './proto/model_grpc_pb';

class ServerGrpc {
  server: Server;
  adress: string;

  constructor() {
    this.server = new Server();
    this.adress = `${config.URL}:${config.PORT}`;
  }

  async startServer(): Promise<void> {
    this.server.addService(ModelService, {
      createUser: UserController.createUser,
    });

    this.server.bindAsync(
      this.adress,
      ServerCredentials.createInsecure(),
      (error: any, port: number) => {
        if (error) {
          console.log(
            `Erro ao iniciar servidor gRPC na porta: ${port} \n Erro: ${error}`
          );
          return;
        }

        this.server.start();
        PostgresDB.connect();

        console.log(`Servidor gRPC iniciado no endereço ${this.adress}`);
      }
    );
  }
}

export default new ServerGrpc();
