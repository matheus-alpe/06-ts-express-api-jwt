import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

import routes from './app/routes'

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

routes.get('/', (req, res) => {
  res.json({
    message: 'Welcome to JWT API'
  })
})

app.use(routes)

export default app
