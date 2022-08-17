import { Request, Response } from "express";
import { ListMessageService } from "../services/ListMessageService";

class ListMessageController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listMessageService = new ListMessageService();

        try {
            const messages = await listMessageService.execute()
            return response.status(200).json(messages);
            
        } catch (error) {
            return response.status(500).json({ message: 'Error!'})
        }
    }
}

export { ListMessageController }