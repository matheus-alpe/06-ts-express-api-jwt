import { Router } from 'express'

import AuthRoute from './AuthRoute'
import UserRoute from './UserRoute'

const routes = Router()

routes.use('/auth', AuthRoute)
routes.use('/users', UserRoute)

export default routes
