import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCourseDto } from "./dto/create-course.dto";
import { CourseEntity } from "./entities/course.entity";
import { RepositoryInterface } from "./interfaces/repository.interface";

export class CourseRepository implements RepositoryInterface {
    constructor(
        @InjectRepository(CourseEntity)
        private repository: Repository<CourseEntity>,
      ) {}

      async findAll(){
        console.log("run");
        
        return await this.repository.find()
      }

      async findOneById(id: number){
        return await this.repository.findOneBy({id}); 
      }

      async findOneByLogin(title: string){
        return await this.repository.findOneBy({title}); 
      }

      async create(createUserDto: CreateCourseDto){
        const created = this.repository.create(createUserDto)
        return await this.repository.save(created); 
      }

      async update(id: number, createUserDto: CreateCourseDto){
        return await this.repository.update({id}, createUserDto); 
      }

      async delete(id: number){
        return await this.repository.delete({id}); 
      }
}