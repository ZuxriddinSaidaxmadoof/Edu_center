import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseRepository } from '../course/course.repository';
import { CourseEntity } from '../course/entities/course.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  providers: [CourseRepository
  ],
  exports: [CourseRepository
  ]
})
export class SharedModule {}
