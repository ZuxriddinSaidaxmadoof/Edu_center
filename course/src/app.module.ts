import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './common/config';
import { typeOrmConfig } from './common/database/config';
import { CourseModule } from './modules/course/course.module';


@Module({
  imports: [CourseModule, 
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
