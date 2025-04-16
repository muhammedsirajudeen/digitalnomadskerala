export const envConfig = {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/nomads',
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENTID: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID || '',
} as const 