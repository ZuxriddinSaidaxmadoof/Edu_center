import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/database/baseEntity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({
    name: 'login',
    type: 'varchar',
    length: 126,
    nullable: false,
    unique: true,
  })
  login: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 360,
    nullable: false,
  })
  password: string;

}
