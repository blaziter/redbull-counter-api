import oauth2, {
    TOAuth2AccessToken,
    TOAuth2Provider,
} from '@bogeychan/elysia-oauth2';
import { randomBytes } from 'crypto';

export const slack = (): TOAuth2Provider => {
    return {
        clientId: process.env.SLACK_CLIENT_ID,
        clientSecret: process.env.SLACK_CLIENT_SECRET,

        auth: {
            url: 'https://slack.com/oauth/v2/authorize',
            params: {
                allow_signup: true,
            },
        },

        token: {
            url: 'https://slack.com/api/oauth.v2.access',
            params: {},
        },
    };
};

export const globalState = randomBytes(8).toString('hex');
let globalToken: TOAuth2AccessToken | undefined;

export const auth = oauth2({
    profiles: {
        slack: {
            provider: slack(),
            scope: ['user'],
        },
    },
    state: {
        check(ctx, name, state) {
            return state === globalState;
        },
        generate(ctx, name) {
            return globalState;
        },
    },
    storage: {
        get(ctx, name) {
            return globalToken;
        },
        set(ctx, name, token) {
            globalToken = token;
        },
        delete(ctx, name) {
            globalToken = undefined;
        },
    },
});
