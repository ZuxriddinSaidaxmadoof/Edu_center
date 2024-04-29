import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/database/baseEntity';

@Entity('course-file')
export class CourseFileEntity extends BaseEntity {
  @Column({
    name: 'course_id',
    type: 'int',
    nullable: false,
  })
  courseId: number;

  @Column({
    name: 'file_id',
    type: 'int',
    nullable: false,
  })
  fileId: number;

}
