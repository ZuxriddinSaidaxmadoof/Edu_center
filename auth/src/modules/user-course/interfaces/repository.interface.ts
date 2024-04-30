import { DeleteResult, UpdateResult } from "typeorm";
import { CreateCourseFileDto } from "../dto/create-user-course.dto";
import { UserCourseEntity } from "../entities/user-course.entity";

export interface RepositoryInterfaceCourseFile {
     findAll(): Promise<UserCourseEntity[]>

     findOneById(id: number): Promise<UserCourseEntity>

     findOneByCourseId(courseId: number): Promise<UserCourseEntity> 

     create(createCourseFIleDto: CreateCourseFileDto): Promise<UserCourseEntity>

     update(id: number, createCourseFIleDto: CreateCourseFileDto): Promise<UpdateResult>

     delete(id: number):  Promise<DeleteResult>
}
