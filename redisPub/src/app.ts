import express from 'express'
import { auth } from './middlewares/auth'
import status from './status'
import routes from './route'
import bodyParser from 'body-parser'
import { RedisIo } from './infra/redis'

class App {
    express: express.Application

    constructor() {
        this.express = express()
        this.status()
        this.middlewares()
        this.routes()
        this.redisPubSub()
    }

    private middlewares() {
        this.express.use(express.json({ limit: '20MB' }))
        this.express.use(auth)
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(bodyParser.json())
    }

    private routes() {
        this.express.use(routes)
    }

    private status() {
        this.express.use(status)
    }

    async redisPubSub() {
        await RedisIo.connect()
    }
}

export default new App().express