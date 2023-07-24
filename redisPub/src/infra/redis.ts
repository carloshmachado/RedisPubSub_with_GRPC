import Redis from 'ioredis'
import config from "../config";

export class RedisIo {
  public static publisher: Redis;
  private static channel: string

  public static async connect() {
    this.publisher = new Redis({
      host: 'localhost',
      port: 6379
    })
    this.channel = config.REDIS_CHANNEL
  }

  public static messagePub(message: object) {
    const msg = JSON.stringify(message)
    this.publisher.publish(this.channel, msg);
    console.log(`Mensagem enviada para o canal: ${this.channel}: ${msg}`);
  }

  public static messagePub2(message: object) {
    const msg = JSON.stringify(message)
    this.publisher.publish(`${this.channel}2`, msg);
    console.log(`Mensagem enviada para o canal: ${this.channel}2: ${msg}`);
  }
}