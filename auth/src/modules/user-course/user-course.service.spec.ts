import { Test, TestingModule } from '@nestjs/testing';
import { UserCourseService } from './user-course.service';

describe('CourseFileService', () => {
  let service: UserCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCourseService],
    }).compile();

    service = module.get<UserCourseService>(UserCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
