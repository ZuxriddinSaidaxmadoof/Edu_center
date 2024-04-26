import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './modules/users/entities/user.entity';
import { UsersModule } from './modules/users/users.module';
import {config} from "./common/config/index"

@Module({
  imports: [UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
