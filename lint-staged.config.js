export default {
    'api/**/*.{js,ts}': [
        () => 'pnpm --filter api lint --fix',
        'prettier --write',
    ],
    'web/**/*.{js,ts,tsx}': [
        () => 'pnpm --filter web lint --fix',
        'prettier --write',
    ],
};
