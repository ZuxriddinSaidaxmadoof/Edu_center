import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/database/baseEntity';

@Entity('user-course')
export class UserCourseEntity extends BaseEntity {
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
  userId: number;

}
