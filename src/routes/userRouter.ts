import { logger } from '@bogeychan/elysia-logger';
import { Elysia } from 'elysia';

import { UserController } from '@controllers/user';
import { BaseDto } from '@types';

export const userRouter = new Elysia({ name: 'counterRouter' })
    .use(logger({ autoLogging: true }))
    .group('user', (app) =>
        app
            .get('', (ctx) => UserController.findAll(ctx as BaseDto))
            .get(':id', (ctx) => UserController.findOne(ctx as BaseDto))
    );
