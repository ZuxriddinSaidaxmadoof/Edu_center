import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserCourseService } from './user-course.service';
import { CreateUserCourseDto } from './dto/create-user-course.dto';

@ApiTags("User-course")
@Controller('user-course')
export class UserCourseController {
  constructor(private readonly courseFileService: UserCourseService) {}

  @Post()
  create(@Body() createCourseFileDto: CreateUserCourseDto) {
    return this.courseFileService.create(createCourseFileDto);
  }

  @Get()
  findAll() {
    return this.courseFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseFileService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseFileService.remove(+id);
  }
}
