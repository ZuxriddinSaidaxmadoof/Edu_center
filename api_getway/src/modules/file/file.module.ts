import { BadRequestException, Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { existsSync, mkdir, mkdirSync } from 'fs';
import { Request } from 'express';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (req: Request, file: Express.Multer.File, cb: (err: Error | null, dest: string) => void) =>{
          const uploadFilePath: string = "upload";
          if(!existsSync(uploadFilePath)){
            mkdirSync(uploadFilePath);
          }
          // if(file.mimetype.split("/")[0] === "image"){
            cb(null, uploadFilePath);
          // }
          // cb(new BadRequestException("You can upload only image"), uploadFilePath);
        },
        filename: (req: Request, file: Express.Multer.File, cb: any): void => {
          cb(
            null,
            `${file.mimetype.split("/")[0]}__${Date.now()}.${file.mimetype.split("/")[1]}`
            )
        }
        
      })
    })
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
