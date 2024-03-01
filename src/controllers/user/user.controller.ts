import { userService } from '@services/user';
import { BaseDto } from '@types';
import { findOneUserDto } from './user.dto';

export class userController {
    static findAll = async (ctx: BaseDto) => {
        return userService.findAll(ctx);
    };
    static findOne = async (ctx: findOneUserDto) => {
        return userService.findOne(ctx);
    };
}
