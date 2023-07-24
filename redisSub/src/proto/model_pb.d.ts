// package: model
// file: model.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreateUserRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): CreateUserRequest;
    getUsuario(): string;
    setUsuario(value: string): CreateUserRequest;
    getSenha(): string;
    setSenha(value: string): CreateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        token: string,
        usuario: string,
        senha: string,
    }
}

export class CreateUserReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): CreateUserReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserReply.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserReply): CreateUserReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserReply;
    static deserializeBinaryFromReader(message: CreateUserReply, reader: jspb.BinaryReader): CreateUserReply;
}

export namespace CreateUserReply {
    export type AsObject = {
        message: string,
    }
}

export class HealthCheckRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HealthCheckRequest): HealthCheckRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
    static deserializeBinaryFromReader(message: HealthCheckRequest, reader: jspb.BinaryReader): HealthCheckRequest;
}

export namespace HealthCheckRequest {
    export type AsObject = {
    }
}

export class HealthCheckReply extends jspb.Message { 
    getMessage(): number;
    setMessage(value: number): HealthCheckReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthCheckReply.AsObject;
    static toObject(includeInstance: boolean, msg: HealthCheckReply): HealthCheckReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthCheckReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthCheckReply;
    static deserializeBinaryFromReader(message: HealthCheckReply, reader: jspb.BinaryReader): HealthCheckReply;
}

export namespace HealthCheckReply {
    export type AsObject = {
        message: number,
    }
}
