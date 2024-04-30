import { PartialType } from '@nestjs/swagger';
import { CreateUserCourseDto } from './create-user-course.dto';

export class UpdateCourseFileDto extends PartialType(CreateUserCourseDto) {}
