import { t } from 'elysia';

export const generalSlackBodyElysiaDto = t.Object({
    userId: t.String(),
});

export type generalSlackBodyDto = (typeof generalSlackBodyElysiaDto)['static'];
