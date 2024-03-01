import { BaseDto } from '@types';
import { t } from 'elysia';

export const findOneUserElysiaDto = {
    params: t.Object({
        id: t.String(),
    }),
};

export type findOneUserDto = {
    params: (typeof findOneUserElysiaDto.params)['static'];
} & BaseDto;
