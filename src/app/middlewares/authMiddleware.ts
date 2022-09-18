import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import config from '../../config'

interface TokenPayload {
  id: string
  iat: number
  exp: number
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.sendStatus(401)
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, config.JWT_SECRET)
    const { id } = data as TokenPayload
    req.params.userId = id

    next()
  } catch {
    return res.sendStatus(401)
  }
}
