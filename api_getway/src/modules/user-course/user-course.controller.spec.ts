import { Test, TestingModule } from '@nestjs/testing';
import { CourseFileController } from './user-course.controller';
import { CourseFileService } from './user-course.service';

describe('CourseFileController', () => {
  let controller: CourseFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseFileController],
      providers: [CourseFileService],
    }).compile();

    controller = module.get<CourseFileController>(CourseFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
