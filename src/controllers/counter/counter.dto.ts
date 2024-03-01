import { BaseDto } from '@types';
import { t } from 'elysia';

export const addOneBodyElysiaDto = {
    body: t.Object({
        userId: t.String(),
    }),
};

export type addOneBodyDto = {
    body: (typeof addOneBodyElysiaDto.body)['body'];
} & BaseDto;
