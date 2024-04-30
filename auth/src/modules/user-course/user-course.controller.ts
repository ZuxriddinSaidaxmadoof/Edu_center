import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { ResData } from 'src/lib/resData';
import { CreateCourseFileDto } from './dto/create-user-course.dto';
import { UserCourseService } from './user-course.service';

@Controller()
export class UserCourseController {
  constructor(private readonly userCourseService: UserCourseService) {}


  @GrpcMethod('UserCourseService', 'FindOne')
  async findOne(data: {id: number}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    return await this.userCourseService.findOne(data.id);
  }

  @GrpcMethod('UserCourseService', 'FindAll')
  async findAll(data: {}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    
    const items = await this.userCourseService.findAll();
     
    return items;
  }

  @GrpcMethod('UserCourseService', 'Create')
  async create(data: CreateCourseFileDto, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    
    return await this.userCourseService.create(data);
  }

  @GrpcMethod('UserCourseService', 'Delete')
  async delete(data: {id: number}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
  
    return await this.userCourseService.remove(data.id);
  }
}
