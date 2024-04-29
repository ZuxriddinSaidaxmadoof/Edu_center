import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/database/baseEntity';

@Entity('course')
export class CourseEntity extends BaseEntity {
  @Column({
    name: 'title',
    type: 'varchar',
    length: 226,
    nullable: false,
    unique: true
  })
  title: string;

  @Column({
    name: 'description',
    type: 'varchar',
    nullable: false,
  })
  description: string;

}
