import { NextFunction, Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import config from '../../config'

class AuthController {
  async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body

      const user = await User.createQueryBuilder('user')
        .addSelect('user.password')
        .where('user.email = :email', { email })
        .getOne()

      console.log(user)
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
    } catch (error) {
      next(error)
    }
  }
}

export default new AuthController()
