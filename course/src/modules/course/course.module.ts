import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { UsersController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { CourseRepository } from './course.repository';


@Module({
  imports: [
    TypeOrmModule.forFeature([CourseEntity]),
  ],
  controllers: [UsersController],
  providers: [CourseService, CourseRepository],
})
export class CourseModule {}
