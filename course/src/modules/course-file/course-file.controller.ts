import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import { CourseFileService } from './course-file.service';
import { CreateCourseFileDto } from './dto/create-course-file.dto';

@Controller()
export class CourseFileController {
  constructor(private readonly courseFileService: CourseFileService) {}


  @GrpcMethod('CourseFileService', 'FindOne')
  async findOne(data: {id: number}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    return await this.courseFileService.findOne(data.id);
  }

  @GrpcMethod('CourseFileService', 'FindAll')
  async findAll(data: {}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    
    const items = await this.courseFileService.findAll();
     
    return items;
  }

  @GrpcMethod('CourseFileService', 'Create')
  async create(data: CreateCourseFileDto, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    const foundCourse = await this.courseFileService.findOneByCourseId(data.courseId)
    if(foundCourse.statusCode == 404){
      return foundCourse;
    }
    return await this.courseFileService.create(data);
  }

  @GrpcMethod('CourseFileService', 'Delete')
  async delete(data: {id: number}, metadata: Metadata, call: ServerUnaryCall<any, any>) {
  
    return await this.courseFileService.remove(data.id);
  }
}
