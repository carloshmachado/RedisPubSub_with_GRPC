import { Model } from "../infra/modelConnect";

class UserController {
  public async execute(message: MessageValid): Promise<void> {
    const result = await Model.createUser(message)
  }
}

export default new UserController();