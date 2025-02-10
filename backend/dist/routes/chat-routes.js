import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatPromptValidator, validate } from "../utils/validators.js";
import { generateChatCompletion, sendChatsToUser } from "../controllers/chat-controller.js";
// protected api (only authenticated users can access)
const chatRoutes = Router();
chatRoutes.post("/new", validate(chatPromptValidator), verifyToken, generateChatCompletion);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);
export default chatRoutes;
//# sourceMappingURL=chat-routes.js.map