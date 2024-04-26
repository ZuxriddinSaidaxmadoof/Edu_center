import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./entities/user.entity";
import { RepositoryInterface } from "./interfaces/repository.interface";

export class UserRepository implements RepositoryInterface {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
      ) {}

      async findAll(){
        console.log("run");
        
        return await this.usersRepository.find()
      }

      async findOneById(id: number){
        return await this.usersRepository.findOneBy({id}); 
      }

      async findOneByLogin(login: string){
        return await this.usersRepository.findOneBy({login}); 
      }

      async create(createUserDto: CreateUserDto){
        const created = this.usersRepository.create(createUserDto)
        return await this.usersRepository.save(created); 
      }

      async update(id: number, createUserDto: CreateUserDto){
        return await this.usersRepository.update({id}, createUserDto); 
      }

      async delete(id: number){
        return await this.usersRepository.delete({id}); 
      }
}