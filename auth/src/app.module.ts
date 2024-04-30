import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { typeOrmConfig } from './common/database/config';
import { UserCourseModule } from './modules/user-course/user-course.module';

@Module({
  imports: [UsersModule,UserCourseModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
