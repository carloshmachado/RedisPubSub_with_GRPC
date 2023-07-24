import { PostgresDB } from '../infra/PrismaDB/postgresDB';

export class User {
  public static async create(usuario: string, senha: string): Promise<void> {
    await PostgresDB.prisma.usuario.create({
      data: {
        usuario,
        senha
      }
    });
  }
}
