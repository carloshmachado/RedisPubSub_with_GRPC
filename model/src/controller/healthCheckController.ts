import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';

import { HealthCheckReply, HealthCheckRequest } from '../proto/model_pb';
class HealthCheckController {
  healthCheck(
    call: ServerUnaryCall<HealthCheckRequest, HealthCheckReply>,
    callback: sendUnaryData<HealthCheckReply>
  ) {
    const reply = new HealthCheckReply();
    reply.setMessage(0);
    callback(null, reply);
  }
}

export default new HealthCheckController();
