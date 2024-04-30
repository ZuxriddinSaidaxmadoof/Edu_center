import { Injectable } from '@nestjs/common';
import { ResData } from 'src/lib/resData';
import { UserRepository } from '../users/user.repository';
import { CreateCourseFileDto } from './dto/create-user-course.dto';
import { UserCourseRepository } from './user-course.repository';


@Injectable()
export class UserCourseService {
  constructor(private readonly courseRepository: UserCourseRepository,
    private readonly userRepository: UserRepository
    ){}
    async create(createCourseDto: CreateCourseFileDto) {
      const foundUser = await this.userRepository.findOneById(createCourseDto.userId)
      if(!foundUser){
        return new ResData("User not found", 404);
      }

      const created = await this.courseRepository.create(createCourseDto);
      console.log("created: ", created)
      
      return new ResData("created", 201, created);
    }
  
  
    async findAll() {
      console.log("user-course");
      
      const allData = await this.courseRepository.findAll()
      return new ResData("All user-courses", 200, allData);
    }
  
    async findOne(id: number) {
      const foundUser = await this.courseRepository.findOneById(id);
      if(!foundUser){
        return new ResData("user-course Not found", 404, foundUser)
      }
  
      return new ResData("One user-course by id", 200, foundUser)
    }
  
    async findOneByCourseId(courseId: number) {
      const foundCourseFile = await this.courseRepository.findOneByCourseId(courseId);
      console.log("found",foundCourseFile);
      
      if(!foundCourseFile){
        return new ResData("user-course Not found by courseId", 404, foundCourseFile)
      }
  
      return new ResData("One user-course by course id", 200, foundCourseFile)
    }
  
    async remove(id: number) {
      const data = await this.courseRepository.findOneById(id);
      if(!data){
        return new ResData("user-course not found", 404);
      }
      await this.courseRepository.delete(id)
      return new ResData("user-course deleted successfully", 200, data);
    }
}
