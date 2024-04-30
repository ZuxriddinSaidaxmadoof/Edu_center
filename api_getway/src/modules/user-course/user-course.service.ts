import { Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { USER_COURSE_PACKAGE } from 'src/common/const/microservices';
import { ResData } from 'src/lib/resData';
import { CreateUserCourseDto } from './dto/create-user-course.dto';

@Injectable()
export class UserCourseService {

  private courseService: any;

  constructor(@Inject(USER_COURSE_PACKAGE) private client: ClientGrpc,
  @Inject("CACHE_MANAGER") private cacheManager: Cache
  ) {}

  onModuleInit() {
    this.courseService = this.client.getService<any>('UserCourseService');
  }

  async findAll() {
    
    const allCourses = await this.cacheManager.get('courses_files')

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

  async create(createAuthDto: CreateUserCourseDto) {

    // const foundFile = await this.fileRepository.findOneById(createAuthDto.userId);
    // if(!foundFile){
    //   return new ResData("User not found", 404)
    // }

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
