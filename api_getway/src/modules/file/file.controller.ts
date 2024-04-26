import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { fileOptions } from './file.option';

@ApiTags("Files")
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}


// @Post('upload')
// @ApiConsumes("multipart/form-data")
// @ApiBody({
//   schema: {
//     type: 'object',
//     properties: {
//       file: {
//         type: 'string',
//         format: 'binary'
//       }
//     }
//   }
// })
// @UseInterceptors(FileInterceptor('file'))
// uploadFile(@UploadedFile(new ParseFilePipe({
//   validators: [
//     new MaxFileSizeValidator({ maxSize: 10000000 }),
//     new FileTypeValidator({ fileType: 'image' }),
//   ],
// }),) file: Express.Multer.File) {
//   console.log(file);
// }


@Post('upload-multiple')
@ApiConsumes("multipart/form-data")
@ApiBody({
  type: 'multipart/form-data',
  schema: {
    type: 'object',
    properties: {
      ['file']: {
        type: 'array',
        items: {
          type: 'string',
          format: 'binary'
        }
      }
    }
  }
})
@UseInterceptors(FilesInterceptor('file', null))
uploadMultiFile(
  @UploadedFiles() files: Array<Express.Multer.File>) {
  console.log(files);
}


  @Post()
  create(@Body() createFileDto: CreateFileDto) {
    return this.fileService.create(createFileDto)
  }

  @Get()
  findAll() {
    return this.fileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return this.fileService.update(+id, updateFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileService.remove(+id);
  }
}
