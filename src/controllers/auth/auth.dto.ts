import { BaseDto } from '@types';
import { t } from 'elysia';

export const loginBodyElysiaDto = {
    body: t.Object({
        username: t.String(),
        password: t.String(),
    }),
};

export const registerBodyElysiaDto = {
    body: t.Object({
        username: t.String(),
        firstname: t.String(),
        lastname: t.String(),
        password: t.String(),
        confirmPassword: t.String(),
    }),
};

export type loginBodyDto = {
    body: (typeof loginBodyElysiaDto.body)['body'];
} & BaseDto;

export type registerBodyDto = {
    body: (typeof registerBodyElysiaDto.body)['body'];
} & BaseDto;
