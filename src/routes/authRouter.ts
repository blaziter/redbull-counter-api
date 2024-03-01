import { logger } from '@bogeychan/elysia-logger';
import { Elysia } from 'elysia';

import { authService } from '@services/auth/auth.service';
import { BaseDto } from '@types';

export const authRouter = new Elysia({ name: 'authRouter' })
    .use(logger({ autoLogging: true }))
    .group('auth', (app) =>
        app
            .post('login', (ctx) => authService.login(ctx as BaseDto))
            .post('register', (ctx) => authService.register(ctx as BaseDto))
    );
