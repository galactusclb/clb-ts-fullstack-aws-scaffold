export const cacheConfig = {
    post: {
        list: {
            ttl: 60,
            swr: 5,
        },
        single: {
            ttl: 120,
            swr: 10,
        },
    },
} as const;
