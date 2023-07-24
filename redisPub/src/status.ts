import { Router } from 'express'
import statusController from './controller/statusController'
const status = Router()

status.get('/v1/status', statusController.getStatus)

export default status