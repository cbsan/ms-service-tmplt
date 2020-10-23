import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import expressValidator from 'express-validator'
import * as dotenv from 'dotenv'
import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    dotenv.config()
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
    this.exception()

    this.express.set('projectName', process.env.APP_NAME || 'NONAME')
    this.express.set('port', process.env.PORT || 3000)
    this.express.set('isDev', process.env.NODE_ENV !== 'production')
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(helmet())
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(expressValidator())
  }

  private database (): void {}

  private routes (): void {
    this.express.get('/', (req: Request, res: Response) => {
      return res.send("It's running...")
    })
    this.express.use('/api', routes)
  }

  private exception () {
    this.express.use(
      (err: any, req: Request, res: Response, next: NextFunction) => {
        const { errors } = err

        return res
          .status(err.statusCode ? err.statusCode : 500)
          .json({ error: errors || err.message })
      }
    )
  }
}

export default new App().express
