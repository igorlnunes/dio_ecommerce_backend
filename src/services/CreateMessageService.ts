import { myDataSource } from "../database/index"
import { Message } from "../entities/Messages"


interface IMessage {
    name: string
    email: string
    message: string
}

class CreateMessageService {
    async execute({ name, email, message }: IMessage) {
        const messages = await myDataSource
            .createQueryBuilder()
            .insert()
            .into(Message)
            .values([{
                name: name,
                email: email,
                message: message
            }])


        console.log(messages);
        return messages;
    }
}

export { CreateMessageService }