import { Router } from 'express'

import UserRoute from './UserRoute'

const routes = Router()

routes.use('/users', UserRoute)

export default routes
