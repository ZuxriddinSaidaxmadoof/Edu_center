import { Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { COURSE_FILE_PACKAGE } from 'src/common/const/microservices';
import { ResData } from 'src/lib/resData';
import { FileRepository } from '../file/file.repository';
import { CreateCourseFileDto } from './dto/create-course-file.dto';

@Injectable()
export class CourseFileService {

  private courseService: any;

  constructor(@Inject(COURSE_FILE_PACKAGE) private client: ClientGrpc,
  @Inject("CACHE_MANAGER") private cacheManager: Cache,
  private readonly fileRepository: FileRepository
  ) {}

  onModuleInit() {
    this.courseService = this.client.getService<any>('CourseFileService');
  }

  async findAll() {
    console.log("run");
    
    const allCourses = await this.cacheManager.get('courses_files')
console.log("courses all", allCourses);

    if(allCourses){
      return allCourses;
    } 

    const data = await this.courseService.findAll({});

    if(data.length> 0){
      data.subscribe({
        next: value => this.cacheManager.set("courses_files", value?.data, 0).then(), 
        complete: () => console.log('Sequence complete'), 
      })
    }
    
    return data;
  }

  async create(createAuthDto: CreateCourseFileDto) {

    const foundFile = await this.fileRepository.findOneById(createAuthDto.fileId);
    if(!foundFile){
      return new ResData("File not found", 404)
    }

    const created = await this.courseService.create(createAuthDto)
    await this.cacheManager.del("courses_files");
    return created;
  }


  async findOne(id: number) {
  const data = await this.courseService.findOne({id});
    return data;
  }

  async remove(id: number) {
    const data = await this.courseService.delete({id})
    await this.cacheManager.del("courses_files");
    return data;
  }
}
