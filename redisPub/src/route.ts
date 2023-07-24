import { Router } from 'express'
import UsuarioController from './controller/usuarioController'
import UsuarioController2 from './controller/usuarioController2'

const routes = Router()

routes.post('/v1/usuario', UsuarioController.create)
routes.post('/v2/usuario', UsuarioController2.create)

export default routes
