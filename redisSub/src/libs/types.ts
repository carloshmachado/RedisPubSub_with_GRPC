type Action = 'create' | 'empty'

type MessageValid = {
    action: Action,
    usuario: string,
    senha: string
}