import { NextFunction, Request, Response } from 'express'
import config from '../../config'

interface ResponseJson {
  message: string
  stack?: string
}

export function notFound(req: Request, res: Response) {
  res.status(404).json({
    message: `🔍 - Endpoint not found - ${req.originalUrl}`
  })
}

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500

  res.status(statusCode).json({
    message: error.message,
    stack: config.ENV === 'dev' ? error.stack : '🥞'
  })
}
