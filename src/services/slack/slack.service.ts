import { createAxiosInstance } from '@clients';
import { prismaClient } from '@clients/db.client';
import { generalSlackBodyDto } from '@controllers/slack/slack.dto';

const axiosClient = createAxiosInstance({
    baseUrl: process.env.SLACK_WEBHOOK_URL,
});

export class slackService {
    static announce = async ({ userId }: generalSlackBodyDto) => {
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

        axiosClient.post('', {
            text: `${user.username} has drank ${result.count} Red Bulls!`,
        });
    };
}
