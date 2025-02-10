import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
import { OpenAIApi, ChatCompletionRequestMessage } from "openai";

export const generateChatCompletion = async (
    req: Request, 
    res: Response,
    next: NextFunction
) => {
    console.log("b");
    const { message } = req.body;
    console.log(message);
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res
            .status(401)
            .json({ message: "User not registered or token malfunctioned" });
        }
        // get all user chats
        const chats = user.chats.map(({role, content}) => ({role, content})) as ChatCompletionRequestMessage[];
        chats.push({content: message, role: "user"});
        user.chats.push({content: message, role: "user"});
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

export const sendChatsToUser = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    try {
        const user = await User.findById({ email: res.locals.jwtData.id });
        if (!user) {
            return res.status(401).send("User not registered or token malfunctioned");
        }
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't match");
        }
        return res.status(200).json({ message: "OK", chats: user.chats });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
