import * as dotenv from 'dotenv'

dotenv.config()
const { env } = process

export default {
    API_PORT: parseInt(env.API_PORT || '3000') as number,
    API_SECRET: env.API_SECRET as string,
    NODE_ENV: env.NODE_ENV || 'development' as string,
    REDIS_URL: env.REDIS_URL || 'localhost' as string,
    REDIS_PORT: env.REDIS_PORT || 6379 as number,
    REDIS_CHANNEL: env.REDIS_CHANNEL || 'meuCanal' as string
}