import { prismaClient } from '@clients';
import { addOneBodyDto } from '@controllers/counter';
import { AnnouncerService } from '@services/announcer/announcer.service';
import { isDefined } from '@utils/validators';

export class CounterService {
    static addOne = async (ctx: addOneBodyDto) => {
        const { userId } = ctx.body;

        const result = await prismaClient.counter.findFirst({
            where: {
                user_id: userId,
            },
        });

        if (isDefined(result)) {
            await prismaClient.counter.update({
                where: {
                    id: result.id,
                },
                data: {
                    count: result.count + 1,
                },
            });

            AnnouncerService.announce(ctx);

            ctx.log.info(`Added one drink to ${result.user_id}`);
            return {
                message: `Added one drink to ${result.user_id}`,
            };
        }

        ctx.set.status = 500;
        ctx.log.error('User not found!');
        return {
            message: 'User not found!',
        };
    };
}
