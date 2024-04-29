import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './common/config';
import { typeOrmConfig } from './common/database/config';
import { CourseModule } from './modules/course/course.module';
import { CourseFileModule } from './modules/course-file/course-file.module';
import { CourseRepository } from './modules/course/course.repository';
import { CourseService } from './modules/course/course.service';
import { SharedModule } from './modules/shared/shared.module';


@Module({
  imports: [SharedModule, CourseModule, CourseFileModule,
    TypeOrmModule.forRoot(typeOrmConfig), CourseFileModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
