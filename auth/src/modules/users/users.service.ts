import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ResData } from 'src/lib/resData';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository, 
    private jwtService: JwtService,
  ){}
  async create(createUserDto: CreateUserDto) {
    const created = await this.userRepository.create(createUserDto);
    const token = await this.jwtService.signAsync({id: created.id});
    const register = {data: created, token};
    return new ResData("created", 201, register);
  }

  async findAll() {
    const allData = await this.userRepository.findAll()
    return new ResData("All users", 200, allData);
  }

  async findOne(id: number) {
    const foundUser = await this.userRepository.findOneById(id);
    if(!foundUser){
      return new ResData("UserNot found", 404, foundUser)
    }

    return new ResData("One user by id", 200, foundUser)
  }

  async findOneByLogin(login: string) {
    const foundUser = await this.userRepository.findOneByLogin(login);
    if(!foundUser){
      return new ResData("UserNot found", 404, foundUser)
    }

    return new ResData("One user by login", 200, foundUser)
  }

  async update(id: number, UpdateUserDto: UpdateUserDto) {
    const data = await this.userRepository.findOneById(id);
    if(!data){
      return new ResData("User not found", 404);
    }
    const foundByLogin = await this.userRepository.findOneByLogin(UpdateUserDto?.login);
    
    if(UpdateUserDto?.login !== data?.login && foundByLogin){
      return new ResData("This login already exist", 400);
    }
    const newEntity = Object.assign(data, UpdateUserDto)
    await this.userRepository.update(id, newEntity)
    const findUpdatedUser = await this.userRepository.findOneById(id);
    
    return new ResData("User updated successfully", 200, findUpdatedUser);
  }

  async remove(id: number) {
    const data = await this.userRepository.findOneById(id);
    if(!data){
      return new ResData("User not found", 404);
    }
    const deleted = await this.userRepository.delete(id)
    return new ResData("User deleted successfully", 200, data);
  }
}
