import { Injectable } from '@nestjs/common';
import { ResData } from 'src/lib/resData';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseRepository } from './course.repository';

@Injectable()
export class CourseService {
  constructor(private readonly courseRepository: CourseRepository, 
  ){}
  async create(createCourseDto: CreateCourseDto) {
    const created = await this.courseRepository.create(createCourseDto);
    console.log("created: ", created)
    
    return new ResData("created", 201, created);
  }


  async findAll() {
    const allData = await this.courseRepository.findAll()
    return new ResData("All courses", 200, allData);
  }

  async findOne(id: number) {
    const foundUser = await this.courseRepository.findOneById(id);
    if(!foundUser){
      return new ResData("UserNot found", 404, foundUser)
    }

    return new ResData("One course by id", 200, foundUser)
  }

  async findOneByLogin(login: string) {
    const foundUser = await this.courseRepository.findOneByLogin(login);
    if(!foundUser){
      return new ResData("Course Not found", 404, foundUser)
    }

    return new ResData("One course by login", 200, foundUser)
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const data = await this.courseRepository.findOneById(id);
    if(!data){
      return new ResData("Course not found", 404);
    }

    const newEntity = Object.assign(data, updateCourseDto)
    await this.courseRepository.update(id, newEntity)
    const findUpdatedUser = await this.courseRepository.findOneById(id);
    
    return new ResData("Course updated successfully", 200, findUpdatedUser);
  }

  async remove(id: number) {
    const data = await this.courseRepository.findOneById(id);
    if(!data){
      return new ResData("Course not found", 404);
    }
    const deleted = await this.courseRepository.delete(id)
    return new ResData("Course deleted successfully", 200, data);
  }
}
