import { Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { COURSE_PACKAGE } from 'src/common/const/microservices';
import { ResData } from 'src/lib/resData';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {

  private courseService: any;

  constructor(@Inject(COURSE_PACKAGE) private client: ClientGrpc,
  @Inject("CACHE_MANAGER") private cacheManager: Cache,
  
  ) {}

  onModuleInit() {
    this.courseService = this.client.getService<any>('CourseService');
  }

  async findAll() {
    const allCourses = await this.cacheManager.get("courses");

    if(allCourses){
      return new ResData('All courses from redis', 200, allCourses);
    } 

    const data = await this.courseService.findAll({});
    await this.cacheManager.set("courses", data.data, 0);

    return data;
  }

  async create(createAuthDto: CreateCourseDto) {
    const created = await this.courseService.create(createAuthDto)
    await this.cacheManager.del("courses");
    return created;
  }


  async findOne(id: number) {
  const data = await this.courseService.findOne({id});
    return data;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const data = await this.courseService.update({id, ...updateCourseDto})
    await this.cacheManager.del("courses");
    return data;
  }

  async remove(id: number) {
    const data = await this.courseService.delete({id})
    await this.cacheManager.del("courses");
    return data;
  }
}
