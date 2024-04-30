import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from '../file/entities/file.entity';
import { FileModule } from '../file/file.module';
import { FileRepository } from '../file/file.repository';


@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  providers: [FileRepository],
  exports: [FileRepository
  ]
})
export class SharedModule {}
