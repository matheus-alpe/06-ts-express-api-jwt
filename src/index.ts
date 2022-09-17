import 'reflect-metadata'
import { AppDataSource } from './database/data-source'
import initializeServer from './server'

AppDataSource.initialize().then(initializeServer)
