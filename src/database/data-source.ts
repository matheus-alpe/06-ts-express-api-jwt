import { DataSource } from 'typeorm'
import config from '../config'

const { DATABASE, ENV } = config

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DATABASE.HOST,
  port: DATABASE.PORT,
  username: DATABASE.USERNAME,
  password: DATABASE.PASSWORD,
  database: DATABASE.NAME,
  entities: [`**/models/*.ts`],
  migrations: [`**/migrations/*.ts`],
  synchronize: !!(ENV == 'dev'),
  logging: false
})
