import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './modules/auth/auth.module';
import { FileModule } from './modules/file/file.module';
import { CourseModule } from './modules/course/course.module';
import { redisStore } from 'cache-manager-redis-yet';
import { CacheModule } from '@nestjs/cache-manager';


@Module({
  imports: [
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
    FileModule,
    CourseModule,
  ],
})
export class AppModule {}
