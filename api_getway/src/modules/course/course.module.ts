import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { COURSE_PACKAGE } from 'src/common/const/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: COURSE_PACKAGE,
        transport: Transport.GRPC,
        options: {
          package: 'course',
          protoPath: join(__dirname, '../../proto/course.proto'),
          url: "localhost:8800"
        },
      },
    ]),
  ],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
