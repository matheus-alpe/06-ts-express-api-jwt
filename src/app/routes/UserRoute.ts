import { Router } from 'express'
import { UserController } from '../controllers'

const route = Router()

route.post('/', UserController.store)

export default route
