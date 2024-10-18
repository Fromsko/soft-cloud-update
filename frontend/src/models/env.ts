// src/models/Env.ts

export enum Environment {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
}

export const EnvConfig = {
    [Environment.DEVELOPMENT]: {
        baseApi: import.meta.env.VITE_API_BASE,
        mockApi: import.meta.env.VITE_API_MOCK,
        useMock: import.meta.env.VITE_API_USE_MOCK,
    },
    [Environment.PRODUCTION]: {
        baseApi: import.meta.env.VITE_API_BASE,
        mockApi: import.meta.env.VITE_API_MOCK,
        useMock: import.meta.env.VITE_API_USE_MOCK,
    },
};