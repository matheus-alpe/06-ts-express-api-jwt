import { Request, Response } from 'express'

class UserController {
  store(req: Request, res: Response) {
    return res.json({
      message: 'ok',
      ...req.body
    })
  }
}

export default new UserController()
