import { DeleteResult, UpdateResult } from "typeorm";
import { CreateCourseDto } from "../dto/create-course.dto";
import { CourseEntity } from "../entities/course.entity";

export interface RepositoryInterface {
     findAll(): Promise<CourseEntity[]>

     findOneById(id: number): Promise<CourseEntity>

     findOneByLogin(login: string): Promise<CourseEntity> 

     create(createCourseDto: CreateCourseDto): Promise<CourseEntity>

     update(id: number, createCourseDto: CreateCourseDto): Promise<UpdateResult>

     delete(id: number):  Promise<DeleteResult>
}
