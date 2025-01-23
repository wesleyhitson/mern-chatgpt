import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
import { OpenAIApi, ChatCompletionRequestMessage } from "openai";

export const generateChatCompletion = async (
    req: Request, 
    res: Response,
    next: NextFunction
) => {
    const { prompt } = req.body;
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
        return res
        .status(401)
        .json({ message: "User not registered or token malfunctioned" });
    }
    // get all user chats
    const chats = user.chats.map(({role, content}) => ({role, content})) as ChatCompletionRequestMessage[];
    chats.push({content: prompt, role: "user"});
    user.chats.push({conten: prompt, role: "user"});
    // send all chats with new one to API
    const config = configureOpenAI();
    const openai = new OpenAIApi(config);
    const chatResponse = await openai.createChatCompletion({
        model: "gpt-3.5-turbo", 
        messages: chats
    });
    // get response
    
};
