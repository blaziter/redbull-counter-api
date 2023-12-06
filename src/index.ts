import cors from '@elysiajs/cors';
import { Elysia } from 'elysia';

import { auth } from '@utils/providers';


const app = new Elysia()
    .use(cors())
    .use(auth)
    .listen(
        {
            port: process.env.PORT,
            hostname: process.env.HOSTNAME,
        },
        ({ hostname, port }) => {
            console.log(`🦊 Elysia is running at ${hostname}:${port}`);
        }
);
