import Redis from 'ioredis'
import config from "../config";

export class RedisIo {
  public subscriber: Redis;
  public channel: string

  constructor(channel: string) {
    this.subscriber = new Redis({
      host: 'localhost',
      port: 6379
    })
    this.channel = channel
  }
}