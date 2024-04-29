import { Injectable } from '@nestjs/common';
import { ResData } from 'src/lib/resData';
import { CourseFileRepository } from './course-file.repository';
import { CreateCourseFileDto } from './dto/create-course-file.dto';
import { UpdateCourseFileDto } from './dto/update-course-file.dto';

@Injectable()
export class CourseFileService {
  constructor(private readonly courseRepository: CourseFileRepository, 
    ){}
    async create(createCourseDto: CreateCourseFileDto) {
      const created = await this.courseRepository.create(createCourseDto);
      console.log("created: ", created)
      
      return new ResData("created", 201, created);
    }
  
  
    async findAll() {
      const allData = await this.courseRepository.findAll()
      return new ResData("All courses file", 200, allData);
    }
  
    async findOne(id: number) {
      const foundUser = await this.courseRepository.findOneById(id);
      if(!foundUser){
        return new ResData("course file Not found", 404, foundUser)
      }
  
      return new ResData("One course file by id", 200, foundUser)
    }
  
    async findOneByCourseId(courseId: number) {
      const foundCourseFile = await this.courseRepository.findOneByCourseId(courseId);
      if(!foundCourseFile){
        return new ResData("Course file Not found", 404, foundCourseFile)
      }
  
      return new ResData("One course file by login", 200, foundCourseFile)
    }
  
    async update(id: number, updateCourseDto: UpdateCourseFileDto) {
      const data = await this.courseRepository.findOneById(id);
      if(!data){
        return new ResData("Course file not found", 404);
      }
  
      const newEntity = Object.assign(data, updateCourseDto)
      await this.courseRepository.update(id, newEntity)
      const findUpdatedCourseFile = await this.courseRepository.findOneById(id);
      
      return new ResData("Course file updated successfully", 200, findUpdatedCourseFile);
    }
  
    async remove(id: number) {
      const data = await this.courseRepository.findOneById(id);
      if(!data){
        return new ResData("Course file not found", 404);
      }
      await this.courseRepository.delete(id)
      return new ResData("Course file deleted successfully", 200, data);
    }
}
