import UserController from "./userController";
import EmptyMessage from '../libs/emptyMessage'


const processMessage = {
  create: UserController,
  empty: EmptyMessage
}

export { processMessage }