import { RpcException } from "@nestjs/microservices";

export class BadRequesrException extends RpcException{
    message: string;
    statusCode: number;
    constructor(message: string, statusCode: number){
        super(message);
        this.statusCode = 400;
    }
}