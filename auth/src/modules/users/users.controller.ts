import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserById } from './interfaces/repository.interface';
import { Metadata } from '@grpc/grpc-js';
import { ServerUnaryCall } from '@grpc/grpc-js/build/src/server-call';
import { BadRequesrException } from './exceptions/badRequestException';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {};


  @GrpcMethod('UserService', 'FindOne')
  async findOne(data: UserById, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    return await this.usersService.findOne(data.id);
  }

  @GrpcMethod('UserService', 'FindAll')
  async findAll(data: {}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    
    const items = await this.usersService.findAll();
     
    return items;
  }

  @GrpcMethod('UserService', 'Create')
  async create(data: CreateUserDto, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    const foundUser = await this.usersService.findOneByLogin(data.login)
    if(foundUser.statusCode == 200){
      return new BadRequesrException("This login already exist", 400);
    }
    return await this.usersService.create(data);
  }

  @GrpcMethod('UserService', 'Login')
  async login(data: CreateUserDto, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    return await this.usersService.login(data);
  }

  @GrpcMethod('UserService', 'Update')
  async update(data: {id: number, data: UpdateUserDto}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
  
    return await this.usersService.update(data.id, data);
  }

  @GrpcMethod('UserService', 'Delete')
  async delete(data: {id: number}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
  
    return await this.usersService.remove(data.id);
  }



}
