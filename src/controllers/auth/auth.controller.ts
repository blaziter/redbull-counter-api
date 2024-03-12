import { AuthService } from '@services/auth';
import { loginBodyDto, registerBodyDto } from './auth.dto';

export class AuthController {
    static login = async (ctx: loginBodyDto) => {
        return AuthService.login(ctx);
    };

    static register = async (ctx: registerBodyDto) => {
        return AuthService.register(ctx);
    };
}
