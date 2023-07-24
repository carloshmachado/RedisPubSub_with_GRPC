class EmptyMessage {
  public async execute(): Promise<void> {
    throw new Error('Operação não suportada')
  }
}

export default new EmptyMessage();