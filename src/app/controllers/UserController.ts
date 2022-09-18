import { Request, Response } from 'express'
import User from '../models/User'

class UserController {
  async store(req: Request, res: Response) {
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
  }

  async index(req: Request<{ userId: string }>, res: Response) {
    const users = await User.find()

    return res.json({
      userId: req.params.userId,
      users
    })
  }
}

export default new UserController()
