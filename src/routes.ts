import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  res.json({
    message: 'Welcome to JWT API'
  })
})

export default routes