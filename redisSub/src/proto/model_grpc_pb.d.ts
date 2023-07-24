// package: model
// file: model.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as model_pb from "./model_pb";

interface IModelService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IModelService_IcreateUser;
    healthCheck: IModelService_IhealthCheck;
}

interface IModelService_IcreateUser extends grpc.MethodDefinition<model_pb.CreateUserRequest, model_pb.CreateUserReply> {
    path: "/model.Model/createUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<model_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<model_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<model_pb.CreateUserReply>;
    responseDeserialize: grpc.deserialize<model_pb.CreateUserReply>;
}
interface IModelService_IhealthCheck extends grpc.MethodDefinition<model_pb.HealthCheckRequest, model_pb.HealthCheckReply> {
    path: "/model.Model/healthCheck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<model_pb.HealthCheckRequest>;
    requestDeserialize: grpc.deserialize<model_pb.HealthCheckRequest>;
    responseSerialize: grpc.serialize<model_pb.HealthCheckReply>;
    responseDeserialize: grpc.deserialize<model_pb.HealthCheckReply>;
}

export const ModelService: IModelService;

export interface IModelServer extends grpc.UntypedServiceImplementation {
    createUser: grpc.handleUnaryCall<model_pb.CreateUserRequest, model_pb.CreateUserReply>;
    healthCheck: grpc.handleUnaryCall<model_pb.HealthCheckRequest, model_pb.HealthCheckReply>;
}

export interface IModelClient {
    createUser(request: model_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: model_pb.CreateUserReply) => void): grpc.ClientUnaryCall;
    createUser(request: model_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: model_pb.CreateUserReply) => void): grpc.ClientUnaryCall;
    createUser(request: model_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: model_pb.CreateUserReply) => void): grpc.ClientUnaryCall;
    healthCheck(request: model_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: model_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
    healthCheck(request: model_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: model_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
    healthCheck(request: model_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: model_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
}

export class ModelClient extends grpc.Client implements IModelClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createUser(request: model_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: model_pb.CreateUserReply) => void): grpc.ClientUnaryCall;
    public createUser(request: model_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: model_pb.CreateUserReply) => void): grpc.ClientUnaryCall;
    public createUser(request: model_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: model_pb.CreateUserReply) => void): grpc.ClientUnaryCall;
    public healthCheck(request: model_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: model_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
    public healthCheck(request: model_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: model_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
    public healthCheck(request: model_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: model_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
}
