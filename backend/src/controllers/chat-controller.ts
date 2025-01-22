import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";

export const generateChatCompletion = async (
    req: Request, 
    res: Response,
    next: NextFunction
) => {
    const { prompt } = req.body;
    const user = await User.findById(res.locals.jwtData.id);
};
