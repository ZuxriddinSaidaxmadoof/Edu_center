import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseFileService } from './course-file.service';
import { CreateCourseFileDto } from './dto/create-course-file.dto';

@ApiTags("Course-file")
@Controller('course-file')
export class CourseFileController {
  constructor(private readonly courseFileService: CourseFileService) {}

  @Post()
  create(@Body() createCourseFileDto: CreateCourseFileDto) {
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
