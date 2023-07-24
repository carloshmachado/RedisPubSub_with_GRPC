
import { Request, Response, NextFunction } from 'express'
import config from '../config';
export function auth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ message: "token não fornecido" })
    }

    const parts = authHeader.split(' ');

    if (!(parts.length === 2)) {
        return res.status(401).json({ message: "erro no token" })
    }

    const [schema, token] = parts

    if (!/^Bearer$/i.test(schema)) {
        return res.status(401).json({ message: "token mal formatado" })
    }

    if (config.API_SECRET != token) {
        return res.status(401).json({ message: "token inválido" })
    }

    next()
}