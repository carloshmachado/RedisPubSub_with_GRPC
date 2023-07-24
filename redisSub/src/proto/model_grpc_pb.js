// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2015 gRPC authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var model_pb = require('./model_pb.js');

function serialize_model_CreateUserReply(arg) {
  if (!(arg instanceof model_pb.CreateUserReply)) {
    throw new Error('Expected argument of type model.CreateUserReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_model_CreateUserReply(buffer_arg) {
  return model_pb.CreateUserReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_model_CreateUserRequest(arg) {
  if (!(arg instanceof model_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type model.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_model_CreateUserRequest(buffer_arg) {
  return model_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_model_HealthCheckReply(arg) {
  if (!(arg instanceof model_pb.HealthCheckReply)) {
    throw new Error('Expected argument of type model.HealthCheckReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_model_HealthCheckReply(buffer_arg) {
  return model_pb.HealthCheckReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_model_HealthCheckRequest(arg) {
  if (!(arg instanceof model_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type model.HealthCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_model_HealthCheckRequest(buffer_arg) {
  return model_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var ModelService = exports.ModelService = {
  // Sends a greeting
createUser: {
    path: '/model.Model/createUser',
    requestStream: false,
    responseStream: false,
    requestType: model_pb.CreateUserRequest,
    responseType: model_pb.CreateUserReply,
    requestSerialize: serialize_model_CreateUserRequest,
    requestDeserialize: deserialize_model_CreateUserRequest,
    responseSerialize: serialize_model_CreateUserReply,
    responseDeserialize: deserialize_model_CreateUserReply,
  },
  healthCheck: {
    path: '/model.Model/healthCheck',
    requestStream: false,
    responseStream: false,
    requestType: model_pb.HealthCheckRequest,
    responseType: model_pb.HealthCheckReply,
    requestSerialize: serialize_model_HealthCheckRequest,
    requestDeserialize: deserialize_model_HealthCheckRequest,
    responseSerialize: serialize_model_HealthCheckReply,
    responseDeserialize: deserialize_model_HealthCheckReply,
  },
};

exports.ModelClient = grpc.makeGenericClientConstructor(ModelService);
