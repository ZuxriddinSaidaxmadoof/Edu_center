import { Module } from '@nestjs/common';
import { CourseFileService } from './course-file.service';
import { CourseFileController } from './course-file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseFileEntity } from './entities/course-file.entity';
import { CourseFileRepository } from './course-file.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CourseFileEntity]),
  ],
  controllers: [CourseFileController],
  providers: [CourseFileService, CourseFileRepository],
})
export class CourseFileModule {}
