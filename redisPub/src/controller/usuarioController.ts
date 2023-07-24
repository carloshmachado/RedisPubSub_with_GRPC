import { Request, Response } from 'express'
import { RedisIo } from '../infra/redis'


class UsuarioController {
    public create(req: Request, res: Response): Response {
        try {
            const usuario = req.body.usuario
            const senha = req.body.senha
            RedisIo.messagePub({
              action: 'create',
              usuario: usuario,
              senha: senha
            })
            return res.status(200).json(`Processando msg.`)
        } catch (err: any) {
            return res.status(500).json(`Erro ao criar usuario: ${err.message}`)
        }
    }

    
}

export default new UsuarioController()
