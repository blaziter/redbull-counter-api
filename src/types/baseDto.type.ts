import {
    ElysiaLogger,
    Logger,
    StandaloneLoggerOptions,
} from '@bogeychan/elysia-logger/src/types';
import { JWTPayloadSpec } from '@elysiajs/jwt';
import { Context, Elysia, TSchema, UnwrapSchema } from 'elysia';

export type BaseDto = Context & {
    log: ElysiaLogger;
    jwt: {
        sign: (
            morePayload: UnwrapSchema<
                TSchema,
                Record<string, string | number>
            > &
                JWTPayloadSpec
        ) => Promise<string>;
        verify: (
            jwt?: string
        ) => Promise<
            | (UnwrapSchema<TSchema, Record<string, string | number>> &
                  JWTPayloadSpec)
            | false
        >;
    };
};
