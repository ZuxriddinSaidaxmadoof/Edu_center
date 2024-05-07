import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './modules/auth/auth.module';
import { FileModule } from './modules/file/file.module';
import { CourseModule } from './modules/course/course.module';
import { redisStore } from 'cache-manager-redis-yet';
import { CacheModule } from '@nestjs/cache-manager';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './common/database/config';
import { CourseFileModule } from './modules/course-file/course-file.module';
import { SharedModule } from './modules/shared/shared.module';
import { UserCourseModule } from './modules/user-course/user-course.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    CacheModule.register({
      isGlobal: true,
      useFactory: async() => {
        const store =await redisStore({
          socket: {host: 'redis',port: 6379},
          ttl: 10 * 1000
        })
        return {store}
      }
    }),
    AuthModule,
    SharedModule,
    FileModule,
    CourseModule,
    CourseFileModule,
    UserCourseModule,
  ],
})
export class AppModule {}
