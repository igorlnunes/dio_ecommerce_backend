import { myDataSource } from "../database/index";
import { Message } from "../entities/Messages";


export class ListMessageService {    
    async execute() {
        const messages = await myDataSource.getRepository(Message)
            .find()

        console.log(messages)

        return messages
    }
}

