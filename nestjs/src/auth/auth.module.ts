import { LoginState } from '@entities/loginState';
import { NotificationUserConnection } from '@entities/notificationUserConnection';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { CoursesModule } from '../courses/courses.module';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BasicStrategy } from './strategies/basic.strategy';
import { DevStrategy } from './strategies/dev.strategy';
import { GithubStrategy } from './strategies/github.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { CoreModule } from '../core/core.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register(),
    CoreModule,
    PassportModule.register({}),
    UsersModule,
    CoursesModule,
    ConfigModule,
    HttpModule,
    TypeOrmModule.forFeature([LoginState, NotificationUserConnection]),
  ],
  controllers: [AuthController],
  providers: [AuthService, GithubStrategy, JwtStrategy, BasicStrategy, DevStrategy],
  exports: [GithubStrategy, AuthService],
})
export class AuthModule {}
