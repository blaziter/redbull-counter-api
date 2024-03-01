import { logger } from '@bogeychan/elysia-logger';
import { Elysia } from 'elysia';

import { userController } from '@controllers/user';
import { BaseDto } from '@types';

export const userRouter = new Elysia({ name: 'counterRouter' })
    .use(logger({ autoLogging: true }))
    .group('user', (app) =>
        app
            .get('', (ctx) => userController.findAll(ctx as BaseDto))
            .get(':id', (ctx) => userController.findOne(ctx as BaseDto))
    );
