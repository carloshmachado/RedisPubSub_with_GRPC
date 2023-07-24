export function validateMessage(message: string ): MessageValid {
  const mv: MessageValid = {
      action: 'empty',
      usuario: '',
      senha: ''
  }
  const msg = JSON.parse(message)
  if (msg.action === 'create') {
      mv.action = msg.action
      mv.usuario = msg.usuario
      mv.senha = msg.senha
  }
  return mv
}