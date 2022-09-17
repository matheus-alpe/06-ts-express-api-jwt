import dotenv from 'dotenv'
dotenv.config()

const {
  SERVER_PORT,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE_NAME
} = process.env

export default {
  DATABASE: {
    HOST: POSTGRES_HOST,
    PORT: Number(POSTGRES_PORT),
    USERNAME: POSTGRES_USERNAME,
    PASSWORD: POSTGRES_PASSWORD,
    NAME: POSTGRES_DATABASE_NAME
  },
  SERVER: {
    PORT: Number(SERVER_PORT)
  }
}