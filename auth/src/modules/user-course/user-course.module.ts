import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { UserCourseEntity } from './entities/user-course.entity';
import { UserCourseController } from './user-course.controller';
import { UserCourseRepository } from './user-course.repository';
import { UserCourseService } from './user-course.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserCourseEntity]), SharedModule
  ],
  controllers: [UserCourseController],
  providers: [UserCourseService, UserCourseRepository],
})
export class UserCourseModule {}
