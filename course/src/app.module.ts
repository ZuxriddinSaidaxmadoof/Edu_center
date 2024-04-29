import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './common/config';
import { typeOrmConfig } from './common/database/config';
import { CourseModule } from './modules/course/course.module';
import { CourseFileModule } from './modules/course-file/course-file.module';


@Module({
  imports: [CourseModule, 
    TypeOrmModule.forRoot(typeOrmConfig), CourseFileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
