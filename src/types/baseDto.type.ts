import {
    Logger,
    StandaloneLoggerOptions,
} from '@bogeychan/elysia-logger/src/types';
import { Context } from 'elysia';

export type BaseDto = Context & { log: Logger<StandaloneLoggerOptions> };
