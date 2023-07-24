import { processMessage } from '../controller';
import { RedisIo } from '../infra/redis'
import { validateMessage } from '../libs/messageValidate';

class Message {
    public async subscriber() {
        try {
            const redisIo = new RedisIo('meuCanal')
            redisIo.subscriber.subscribe(redisIo.channel);
            console.log(`Subscribe on channel: ${redisIo.channel}`)
            redisIo.subscriber.on('message', async (ch, message) => {
                const dateIni = new Date().getTime();
                console.log(`Mensagem recebida do canal ${ch}: ${message}`);

                const messageValid = validateMessage(message)
                await processMessage[messageValid.action].execute(messageValid)

                const dateFim = new Date().getTime();
                console.log(`Finished succesfuly with time: ${dateFim - dateIni}`)
            });

            const redisIo2 = new RedisIo('meuCanal2')
            redisIo2.subscriber.subscribe(redisIo2.channel);
            console.log(`Subscribe on channel: ${redisIo2.channel}`)
            redisIo2.subscriber.on('message', async (ch, message) => {
                const dateIni = new Date().getTime();
                console.log(`Mensagem recebida do canal ${ch}: ${message}`);

                const messageValid = validateMessage(message)
                await processMessage[messageValid.action].execute(messageValid)

                const dateFim = new Date().getTime();
                console.log(`Finished succesfuly with time: ${dateFim - dateIni}`)
            });
        } catch (err: any) {
            console.log(`erro ao processar msg: ${err.message}`)
        }
    }
}

export default new Message()
