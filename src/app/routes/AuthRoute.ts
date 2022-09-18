import { Router } from 'express'
import { AuthController } from '../controllers'

const route = Router()

route.post('/', AuthController.authenticate)

export default route
