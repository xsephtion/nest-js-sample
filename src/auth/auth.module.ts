import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from 'src/users/schema/user.schema';
import { LoginController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'TESTING',
      signOptions: { expiresIn: '5m' }
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [LoginController]
})
export class AuthModule { }
