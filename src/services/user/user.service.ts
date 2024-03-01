import { prismaClient } from '@clients';
import { findOneUserDto } from '@controllers/user';
import { BaseDto } from '@types';
import { isDefined } from '@utils/validators';

export class userService {
    static findOne = async (ctx: findOneUserDto) => {
        const { id } = ctx.params;

        const result = await prismaClient.users.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                username: true,
                counter: {
                    select: {
                        count: true,
                    },
                },
            },
        });

        if (isDefined(result)) {
            ctx.log.info(`Found user ${result.id}`);
            return result;
        }

        ctx.set.status = 500;
        ctx.log.error('User not found!');
        return {
            message: 'User not found!',
        };
    };

    static findAll = async (ctx: BaseDto) => {
        const result = await prismaClient.users.findMany({
            select: {
                id: true,
                username: true,
                counter: {
                    select: {
                        count: true,
                    },
                },
            },
        });

        ctx.log.info('Found all users');
        return result;
    };
}
