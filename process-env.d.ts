namespace NodeJS {
    interface ProcessEnv {
        [key: string]: string | undefined;
        HOSTNAME: string;
        PORT: string;
        CLIENT_URL: string;
        JWT_SECRET: string;
        SLACK_CLIENT_ID: string;
        SLACK_CLIENT_SECRET: string;
        SLACK_OAUTH_V2_ACCESS_URL: string;
        SLACK_SIGNIN_URL: string;
        SLACK_WEBHOOK_URL: string;
        DATABASE_PASSWORD: string;
        DATABASE_URL: string;
    }
}
