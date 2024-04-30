import { Module } from '@nestjs/common';
import { UserCourseService } from './user-course.service';
import { UserCourseController } from './user-course.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_COURSE_PACKAGE } from 'src/common/const/microservices';
import { join } from 'path';
import { SharedModule } from '../shared/shared.module';


@Module({
  imports: [SharedModule,
    ClientsModule.register([
      {
        name: USER_COURSE_PACKAGE,
        transport: Transport.GRPC,
        options: {
          package: 'user_course',
          protoPath: join(__dirname, '../../proto/user_course.proto'),
          url: "localhost:7700"
        },
      },
    ])
  ],
  controllers: [UserCourseController],
  providers: [UserCourseService],
})
export class UserCourseModule {}
