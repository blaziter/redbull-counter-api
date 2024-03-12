import { UserService } from '@services/user';
import { BaseDto } from '@types';
import { findOneUserDto } from './user.dto';

export class UserController {
    static findAll = async (ctx: BaseDto) => {
        return UserService.findAll(ctx);
    };
    static findOne = async (ctx: findOneUserDto) => {
        return UserService.findOne(ctx);
    };
}
