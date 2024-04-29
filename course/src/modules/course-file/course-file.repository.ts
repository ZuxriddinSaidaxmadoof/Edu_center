import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCourseFileDto } from "./dto/create-course-file.dto";
import { CourseFileEntity } from "./entities/course-file.entity";
import { RepositoryInterfaceCourseFile } from "./interfaces/repository.interface";

export class CourseFileRepository implements RepositoryInterfaceCourseFile {
    constructor(
        @InjectRepository(CourseFileEntity)
        private repository: Repository<CourseFileEntity>,
      ) {}

      async findAll(){
        console.log("run");
        
        return await this.repository.find()
      }

      async findOneById(id: number){
        return await this.repository.findOneBy({id}); 
      }

      async findOneByCourseId(courseId: number){
        return await this.repository.findOneBy({courseId}); 
      }

      async create(createCourseFileDto: CreateCourseFileDto){
        const created = this.repository.create(createCourseFileDto)
        return await this.repository.save(created); 
      }

      async update(id: number, createCourseFileDto: CreateCourseFileDto){
        return await this.repository.update({id}, createCourseFileDto); 
      }

      async delete(id: number){
        return await this.repository.delete({id}); 
      }
}