import { ChannelCredentials } from '@grpc/grpc-js'
import { ModelClient } from '../proto/model_grpc_pb';
import { CreateUserRequest } from '../proto/model_pb'
import config from '../config';

export class Model {
  public static modelClient: ModelClient

  public static async connect() {
    try {
      this.modelClient = new ModelClient(`${config.MODEL_URL}:${config.MODEL_PORT}`, ChannelCredentials.createInsecure())
      console.log('Model connected');  
    } catch (error: any) {
      console.log('Erro ao conectar no model: ' + error.message);
      throw error;
    }
  }

  public static async createUser(message: MessageValid): Promise<string> {
    const requestParams = new CreateUserRequest()
    requestParams.setToken(`Bearer ${config.MODEL_SECRET}`)
    requestParams.setUsuario(message.usuario)
    requestParams.setSenha(message.senha)

    const createUserResult = await new Promise((resolve, reject) => {
      this.modelClient.createUser(requestParams, function (err, response) {
        if (err) return reject(err)

        let result = response.getMessage()
        
        resolve(result)
      })
    }) as string
    return createUserResult
  }
}