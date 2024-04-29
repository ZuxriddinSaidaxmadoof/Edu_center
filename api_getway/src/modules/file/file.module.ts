import { BadRequestException, Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { existsSync, mkdir, mkdirSync } from 'fs';
import { Request } from 'express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { config } from 'src/common/config';
import { FileRepository } from './file.repository';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({

        destination: (req: Request, file: Express.Multer.File, cb: (err: Error | null, dest: string) => void) =>{
          const uploadFilePath: string = "upload";
          if(!existsSync(uploadFilePath)){
            mkdirSync(uploadFilePath);
          }
            cb(null, uploadFilePath);
        },
        filename: (req: Request, file: Express.Multer.File, cb: any): void => {
          cb(
            null,
            `${file.mimetype.split("/")[0]}__${Date.now()}.${file.mimetype.split("/")[1]}`
            )
        }
      })
    }),
    TypeOrmModule.forFeature([FileEntity]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.databaseUrl,
      entities: [FileEntity],
      synchronize: true,
    })
  ],
  controllers: [FileController],
  providers: [FileService, FileRepository],
})
export class FileModule {}
