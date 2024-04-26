import { DeleteResult, UpdateResult } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserEntity } from "../entities/user.entity";

export interface RepositoryInterface {
     findAll(): Promise<UserEntity[]>

     findOneById(id: number): Promise<UserEntity>

     findOneByLogin(login: string): Promise<UserEntity> 

     create(createUserDto: CreateUserDto): Promise<UserEntity>

     update(id: number, createUserDto: CreateUserDto): Promise<UpdateResult>

     delete(id: number):  Promise<DeleteResult>
}

export interface UserById {
     id: number
   }