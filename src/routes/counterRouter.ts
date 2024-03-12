import { logger } from '@bogeychan/elysia-logger';
import { Elysia } from 'elysia';

import { addOneBodyElysiaDto, CounterController } from '@controllers/counter';
import { BaseDto } from '@types';

export const counterRouter = new Elysia({ name: 'counterRouter' })
    .use(logger({ autoLogging: true }))
    .group('counter', (app) =>
        app.post('add-one', (ctx) => CounterController.addOne(ctx as BaseDto), {
            type: 'json',
            body: addOneBodyElysiaDto.body,
        })
    );
