import { Router } from 'express'
import { notFound, errorHandler } from '../middlewares/errorMiddleware'

import AuthRoute from './AuthRoute'
import UserRoute from './UserRoute'

const routes = Router()

routes.get('/', (req, res) => {
  res.json({
    message: 'Welcome to JWT API'
  })
})

routes.use('/auth', AuthRoute)
routes.use('/users', UserRoute)

routes.use(notFound)
routes.use(errorHandler)

export default routes
