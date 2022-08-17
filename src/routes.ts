import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ListMessageController } from "./controllers/ListMessageController";


const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'This is the API REST for the E-commerce Store. Welcome!'})
})

// Necessita fazer os controllers
router.get('/message', listMessageController.handle);
router.post('/message', createMessageController.handle);

export { router };