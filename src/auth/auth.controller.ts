import { Controller, Request, Post, UseGuards, HttpCode } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";


@Controller('auth')
export class LoginController {

    @UseGuards(LocalAuthGuard)
    @HttpCode(200)
    @Post()
    async login(@Request() req) {
        return req.user
    }

}