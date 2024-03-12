import { logger } from '@bogeychan/elysia-logger';
import { Elysia } from 'elysia';

import { AuthService } from '@services/auth/auth.service';
import { BaseDto } from '@types';

export const authRouter = new Elysia({ name: 'authRouter' })
    .use(logger({ autoLogging: true }))
    .group('auth', (app) =>
        app
            .post('login', (ctx) => AuthService.login(ctx as BaseDto))
            .post('register', (ctx) => AuthService.register(ctx as BaseDto))
    );
