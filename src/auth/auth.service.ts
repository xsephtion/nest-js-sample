import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/schema/user.schema';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>,
        private readonly jwtService: JwtService
    ) { }

    async validateUser({ username, password }: CreateUserDto) {
        const data = await this.userModel.findOne({ username, password }).exec();
        console.log(data);
        if (username === data.username && password === data.password) return { ...data, password: null }
        else return null
    }

    jwtGen({ username }: CreateUserDto) {
        const payload = { username, roles: ['r', 'b'] };
        return { accessToken: this.jwtService.sign(payload) }
    }

}
