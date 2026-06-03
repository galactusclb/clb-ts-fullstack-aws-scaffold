import { cacheConfig } from './cache.ts';
import { Role } from './role.ts';

export const constants = {
    NODE_ENV: process.env.NODE_ENV === 'production',

    auth: {
        ACCESS_SECRET: process.env.ACCESS_SECRET ?? 'change-me-access-secret',
        REFRESH_SECRET: process.env.REFRESH_SECRET ?? 'change-me-refresh-secret',
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID ?? '',
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET ?? '',
        GOOGLE_REDIRECT_URI:
            process.env.GOOGLE_REDIRECT_URI ?? 'http://localhost:4000/api/auth/google/callback',
    },

    aws: {
        xray: {
            enabled: process.env.AWS_XRAY_ENABLED === 'true',
            serviceName: process.env.AWS_XRAY_SERVICE_NAME ?? 'scaffold-api',
        },
    },

    cache: cacheConfig,
    role: Role,
} as const;
