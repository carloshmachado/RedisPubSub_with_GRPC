import { Request, Response } from 'express'

class StatusController {
    public async getStatus(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json({ Status: "Servico em Operacao" })
        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Não foi possível processar a requisição' })
        }
    }
}

export default new StatusController()