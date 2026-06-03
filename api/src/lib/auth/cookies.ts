import { Response } from 'express';

const IS_PROD = process.env.NODE_ENV === 'production';

export function setAuthCookies(res: Response, accessToken: string, refreshToken: string): void {
    res.cookie('access_token', accessToken, {
        httpOnly: true,
        secure: IS_PROD,
        sameSite: IS_PROD ? 'strict' : 'lax',
        maxAge: 15 * 60 * 1000, // 15 min
    });

    res.cookie('refresh_token', refreshToken, {
        httpOnly: true,
        secure: IS_PROD,
        sameSite: IS_PROD ? 'strict' : 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        path: '/api/auth/refresh',
    });
}

export function clearAuthCookies(res: Response): void {
    res.clearCookie('access_token');
    res.clearCookie('refresh_token', { path: '/api/auth/refresh' });
}
