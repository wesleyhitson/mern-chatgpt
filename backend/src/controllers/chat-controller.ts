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
    console.log(prompt);
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res
            .status(401)
            .json({ message: "User not registered or token malfunctioned" });
        }
        // get all user chats
        const chats = user.chats.map(({role, content}) => ({role, content})) as ChatCompletionRequestMessage[];
        chats.push({content: prompt, role: "user"});
        user.chats.push({content: prompt, role: "user"});
        console.log("a");
        // send all chats with new one to API
        const config = configureOpenAI();
        const openai = new OpenAIApi(config);
        const chatResponse = await openai.createChatCompletion({
            model: "gpt-4o-mini", 
            messages: chats
        });
        user.chats.push(chatResponse.data.choices[0].message);
        await user.save();
        return res.status(200).json({ chats: user.chats });
        // get response
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
