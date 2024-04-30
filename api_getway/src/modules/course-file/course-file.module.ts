import { Module } from '@nestjs/common';
import { CourseFileService } from './course-file.service';
import { CourseFileController } from './course-file.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { COURSE_FILE_PACKAGE } from 'src/common/const/microservices';
import { join } from 'path';
import { SharedModule } from '../shared/shared.module';
import { FileRepository } from '../file/file.repository';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: COURSE_FILE_PACKAGE,
        transport: Transport.GRPC,
        options: {
          package: 'course_file',
          protoPath: join(__dirname, '../../proto/course_file.proto'),
          url: "localhost:8800"
        },
      },
    ]),SharedModule
  ],
  controllers: [CourseFileController],
  providers: [CourseFileService],
})
export class CourseFileModule {}
