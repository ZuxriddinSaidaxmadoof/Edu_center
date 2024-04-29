import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices/interfaces';
import { Cache } from '@nestjs/cache-manager';
import { USER_PACKAGE } from 'src/common/const/microservices';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ResData } from 'src/lib/resData';

@Injectable()
export class AuthService {

  private userService: any;

  constructor(@Inject(USER_PACKAGE) private client: ClientGrpc,
  @Inject("CACHE_MANAGER") private cacheManager: Cache,
  ) {}

  onModuleInit() {
    this.userService = this.client.getService<any>('UserService');
  }

  async findAll() {
    const allUsers = await this.cacheManager.get("users");

    if(allUsers){
      return new ResData('All users from redis', 200, allUsers);
    } 

    const data = await this.userService.findAll({});
    await this.cacheManager.set("users", data.data, 0);

    return data;
  }

  async create(createAuthDto: CreateAuthDto) {
    const created = await this.userService.create(createAuthDto)
    await this.cacheManager.del("users");
    return created;
  }

  async login(createAuthDto: CreateAuthDto) {
    const created = await this.userService.login(createAuthDto)
    return created;
  }


  async findOne(id: number) {
  const data = await this.userService.findOne({id});
    return data;
  }

  async update(id: number, updateAuthDto: UpdateAuthDto) {
    const data = await this.userService.update({id, ...updateAuthDto})
    await this.cacheManager.del("users");
    return data;
  }

  async remove(id: number) {
    const data = await this.userService.delete({id})
    await this.cacheManager.del("users");
    return data;
  }
}
