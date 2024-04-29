import { PartialType } from '@nestjs/swagger';
import { CreateCourseFileDto } from './create-course-file.dto';

export class UpdateCourseFileDto extends PartialType(CreateCourseFileDto) {}
