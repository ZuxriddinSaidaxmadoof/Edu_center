import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { UserRepository } from '../users/user.repository';


@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserRepository
  ],
  exports: [UserRepository
  ]
})
export class SharedModule {}
