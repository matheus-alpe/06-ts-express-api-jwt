import 'dotenv/config'

const {
  ENV,
  SERVER_PORT,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE_NAME,
  JWT_SECRET
} = process.env

export default {
  DATABASE: {
    HOST: POSTGRES_HOST,
    PORT: Number(POSTGRES_PORT),
    USERNAME: POSTGRES_USERNAME,
    PASSWORD: POSTGRES_PASSWORD,
    NAME: POSTGRES_DATABASE_NAME
  },
  ENV,
  JWT_SECRET: JWT_SECRET || 'not_so_secret',
  SERVER: {
    PORT: Number(SERVER_PORT)
  }
}
