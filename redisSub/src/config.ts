import * as dotenv from 'dotenv'

dotenv.config()
const { env } = process

export default {
    MODEL_SECRET: env.MODEL_SECRET as string,
    MODEL_PORT: env.MODEL_PORT || 50053 as number,
    MODEL_URL: env.MODEL_URL || '0.0.0.0' as string,
    NODE_ENV: env.NODE_ENV || 'development' as string,
    REDIS_URL: env.REDIS_URL || 'localhost' as string,
    REDIS_PORT: env.REDIS_PORT || 6379 as number,
    REDIS_CHANNEL: env.REDIS_CHANNEL || 'meuCanal' as string
}