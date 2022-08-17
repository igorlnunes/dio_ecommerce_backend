import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";


class CreateMessageController {
    async handle(request: Request, response: Response) {
        const { name, email, message } = request.body;
        
        const createMessageService = new CreateMessageService();

        const newMessage = await createMessageService.execute({ name, email, message });

        console.log(newMessage)

        return response.status(200).json({ newMessage });
    }
}

export { CreateMessageController }