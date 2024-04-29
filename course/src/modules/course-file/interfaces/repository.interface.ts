import { DeleteResult, UpdateResult } from "typeorm";
import { CreateCourseFileDto } from "../dto/create-course-file.dto";
import { CourseFileEntity } from "../entities/course-file.entity";

export interface RepositoryInterfaceCourseFile {
     findAll(): Promise<CourseFileEntity[]>

     findOneById(id: number): Promise<CourseFileEntity>

     findOneByCourseId(courseId: number): Promise<CourseFileEntity> 

     create(createCourseFIleDto: CreateCourseFileDto): Promise<CourseFileEntity>

     update(id: number, createCourseFIleDto: CreateCourseFileDto): Promise<UpdateResult>

     delete(id: number):  Promise<DeleteResult>
}
