import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/testdb'), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
