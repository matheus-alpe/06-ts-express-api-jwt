import 'reflect-metadata'
import { DataSource } from 'typeorm'
import config from './config'

const { DATABASE } = config

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DATABASE.HOST,
  port: DATABASE.PORT,
  username: DATABASE.USERNAME,
  password: DATABASE.PASSWORD,
  database: DATABASE.NAME,
  entities: ['src/app/models/**/*.ts'],
  migrations: ['src/database/migrations/**/*.ts'],
  synchronize: false,
  logging: false
})
