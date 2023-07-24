import * as dotenv from 'dotenv';

dotenv.config();
const { env } = process;

export default {
  PORT: env.PORT,
  URL: env.URL,
  DATABASE_URL_POSTGRES: env.DATABASE_URL,
  MODEL_SECRET: env.MODEL_SECRET
};
