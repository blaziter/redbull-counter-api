import { createAxiosInstance } from '@clients';
import { prismaClient } from '@clients/db.client';
import { addOneBodyDto } from '@controllers/counter';

export class AnnouncerService {
    static announce = async (ctx: addOneBodyDto) => {
        const { userId } = ctx.body;

        const result = await prismaClient.counter.findFirstOrThrow({
            where: {
                user_id: userId,
            },
            select: {
                count: true,
            },
        });

        const user = await prismaClient.users.findUniqueOrThrow({
            where: {
                id: userId,
            },
            select: {
                username: true,
            },
        });

        /* announce to slack channel */
        createAxiosInstance({
            baseUrl: process.env.SLACK_WEBHOOK_URL,
        })
            .post('', {
                text: `${user.username} has drank ${result.count} Red Bulls!`,
            })
            .then((res) => {
                if (res.status === 200) ctx.log.info('Announced to Slack');
            });

        /* announce to discord channel */
        createAxiosInstance({
            baseUrl: process.env.DISCORD_WEBHOOK_URL,
        })
            .post('', {
                content: `${user.username} has drank ${result.count} Red Bulls!`,
            })
            .then((res) => {
                if (res.status === 200) ctx.log.info('Announced to Discord');
            });

        return {
            status: 200,
        };
    };
}
