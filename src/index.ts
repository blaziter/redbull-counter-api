import cors from '@elysiajs/cors';
import { Elysia } from 'elysia';

import { slackRouter } from '@routes/slackRouter';
import { auth } from '@utils/providers';
import jwt from '@elysiajs/jwt';
const app = new Elysia({ prefix: '/api' })
    /**
     * * This middleware is used to handle the CORS preflight request
     * * https://github.com/elysiajs/elysia-cors/issues/48
     */
    .onAfterHandle(({ request, set }) => {
        const allowHeader = set.headers['Access-Control-Allow-Headers'];
        if (allowHeader === '*') {
            set.headers['Access-Control-Allow-Headers'] =
                request.headers.get('Access-Control-Request-Headers') ?? '';
        }
    })
    .use(
        cors({
            origin: process.env.CLIENT_URL,
        })
    )
    .use(
        jwt({
            name: 'jwt',
            secret: process.env.JWT_SECRET,
        })
    )
    .use(auth)
    .use(slackRouter)
    .listen(
        {
            port: process.env.PORT || 3001,
            hostname: process.env.HOSTNAME,
        },
        ({ hostname, port }) => {
            console.log(`🦊 Elysia is running at ${hostname}:${port}`);
        }
    );
