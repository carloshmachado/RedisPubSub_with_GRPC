import { PrismaClient } from '@prisma/client';

export class PostgresDB {
  public static prisma: PrismaClient;

  public static async connect() {
    try {
      this.prisma = new PrismaClient();
      await this.prisma.$connect();
      console.log('Prisma connected');
    } catch (error: any) {
      console.log('error prisma: ' + error.message);
      throw error;
    }
  }
}
