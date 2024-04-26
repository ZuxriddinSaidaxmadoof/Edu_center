import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices/interfaces';
import { USER_PACKAGE } from 'src/common/const/microservices';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {

  private userService: any;

  constructor(@Inject(USER_PACKAGE) private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<any>('UserService');
  }


  async findAll() {
    const data = await this.userService.findAll({});
    return data;
  }

  async create(createAuthDto: CreateAuthDto) {
    const created = await this.userService.create(createAuthDto)
    return created;
  }


  async findOne(id: number) {
  const data = await this.userService.findOne({id});
    return data;
  }

  async update(id: number, updateAuthDto: UpdateAuthDto) {
    const data = await this.userService.update({id, ...updateAuthDto})
    return data;
  }

  async remove(id: number) {
    const data = await this.userService.delete({id})
    return data;
  }
}
