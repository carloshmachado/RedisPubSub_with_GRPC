import { Model } from './infra/modelConnect'
import { RedisIo } from './infra/redis'
import Messager from './messageProcessor/subscriber'

class App {
    public async main() {
        await Model.connect()
        //await RedisIo.connect()
        await Messager.subscriber()
    }
}

export default new App()