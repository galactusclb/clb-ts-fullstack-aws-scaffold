export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN',
}

export type RoleType = keyof typeof Role;
