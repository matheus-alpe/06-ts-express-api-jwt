import { Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import config from '../../config'

class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })
    if (!user) {
      return res.sendStatus(401)
    }

    const { password: passwordEncrypted, ...userData } = user

    const isValidPassword = await bcrypt.compare(password, passwordEncrypted)
    if (!isValidPassword) {
      return res.sendStatus(401)
    }

    const token = jwt.sign({ id: user.id }, config.JWT_SECRET, {
      expiresIn: '1d'
    })

    return res.json({
      user: userData,
      token
    })
  }
}

export default new AuthController()
