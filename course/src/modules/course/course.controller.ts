import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Metadata } from '@grpc/grpc-js';
import { ServerUnaryCall } from '@grpc/grpc-js/build/src/server-call';
import { BadRequesrException } from './exceptions/badRequestException';

@Controller()
export class UsersController {
  constructor(private readonly courseService: CourseService) {};


  @GrpcMethod('CourseService', 'FindOne')
  async findOne(data: {id: number}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    return await this.courseService.findOne(data.id);
  }

  @GrpcMethod('CourseService', 'FindAll')
  async findAll(data: {}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    
    const items = await this.courseService.findAll();
     
    return items;
  }

  @GrpcMethod('CourseService', 'Create')
  async create(data: CreateCourseDto, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    const foundUser = await this.courseService.findOneByLogin(data.title)
    if(foundUser.statusCode == 200){
      return new BadRequesrException("This title already exist", 400);
    }
    return await this.courseService.create(data);
  }

  @GrpcMethod('CourseService', 'Update')
  async update(data: {id: number, data: UpdateCourseDto}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
  
    return await this.courseService.update(data.id, data);
  }

  @GrpcMethod('CourseService', 'Delete')
  async delete(data: {id: number}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
  
    return await this.courseService.remove(data.id);
  }


}
