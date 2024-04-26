import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { FILE_PACKAGE } from 'src/common/const/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: FILE_PACKAGE,
        transport: Transport.GRPC,
        options: {
          package: 'file',
          protoPath: join(__dirname, '../../proto/file.proto'),
          url: "localhost:8800"
        },
      },
    ]),
  ],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
