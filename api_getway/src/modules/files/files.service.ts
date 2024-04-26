import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { FILE_PACKAGE } from 'src/common/const/microservices';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

@Injectable()
export class FilesService {

  private fileService: any;

  constructor(@Inject(FILE_PACKAGE) private client: ClientGrpc) {}

  onModuleInit() {
    this.fileService = this.client.getService<any>('FileService');
  }


  async findAll() {
    console.log("service");
    const data = await this.fileService.findAll({});
    console.log("data", data);
    return data
  }

  async findOne(id: number) {
    console.log(id);
    const data = await this.fileService.findOne(id)
    console.log("data", data);
    return data;
  }

  async create(createFileDto: CreateFileDto) {
    // console.log();
    const data = await this.fileService.create(createFileDto);
    console.log("data", data);
    return data;
  }




  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
