namespace NodeJS {
    interface ProcessEnv {
        [key: string]: string | undefined;
        HOSTNAME: string;
        PORT: string;
        SLACK_CLIENT_ID: string;
        SLACK_CLIENT_SECRET: string;
        SLACK_WEBHOOK_URL: string;
        DATABASE_PASSWORD: string;
        DATABASE_URL: string;
    }
}
