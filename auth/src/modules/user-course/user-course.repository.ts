import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCourseFileDto } from "./dto/create-user-course.dto";
import { UserCourseEntity } from "./entities/user-course.entity";
import { RepositoryInterfaceCourseFile } from "./interfaces/repository.interface";

export class UserCourseRepository implements RepositoryInterfaceCourseFile {
    constructor(
        @InjectRepository(UserCourseEntity)
        private repository: Repository<UserCourseEntity>,
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