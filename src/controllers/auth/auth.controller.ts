import { authService } from '@services/auth';
import { loginBodyDto, registerBodyDto } from './auth.dto';

export class authController {
    static login = async (ctx: loginBodyDto) => {
        return authService.login(ctx);
    };

    static register = async (ctx: registerBodyDto) => {
        return authService.register(ctx);
    };
}
