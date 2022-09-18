import { NextFunction, Request, Response } from 'express'
import User from '../models/User'

class UserController {
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body

      const userExists = await User.findOne({ where: { email } })
      if (userExists) {
        return res.sendStatus(409)
      }

      const user = await User.create({
        email,
        password
      }).save()

      return res.json({
        user
      })
    } catch (error) {
      next(error)
    }
  }

  async index(
    req: Request<{ userId: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const users = await User.find()

      return res.json({
        userId: req.params.userId,
        users
      })
    } catch (error) {
      next(error)
    }
  }
}

export default new UserController()
