import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import isEqual from 'lodash/isEqual';


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const rules = this.reflector.get<string[]>('roles', context.getHandler());
        const request = context.switchToHttp().getRequest().headers;
        const bearerToken = request.authorization.split(' ')[1];
        const b64Conv = Buffer.from(bearerToken.split('.')[1], 'base64');
        const tokenData = JSON.parse(b64Conv.toString());
        return JSON.stringify(tokenData.role) === JSON.stringify(rules)
    }

}