import { logger } from '@bogeychan/elysia-logger';
import { Elysia } from 'elysia';

import { slackController } from '@controllers/slack/slack.controller';
import { generalSlackBodyElysiaDto } from '@controllers/slack/slack.dto';

export const slackRouter = new Elysia({ name: 'slackRouter' })
    .use(logger({ autoLogging: true }))
    .group('slack', (app) =>
        app.post(
            'announce-redbull',
            ({ body }) => {
                slackController.announceRedBull(body);
            },
            {
                type: 'json',
                body: generalSlackBodyElysiaDto,
            }
        )
    );
