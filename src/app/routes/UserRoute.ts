import { Router } from 'express'
import { UserController } from '../controllers'
import authMiddleware from '../middlewares/authMiddleware'

const route = Router()

route.get('/', authMiddleware, UserController.index)
route.post('/', UserController.store)

export default route
