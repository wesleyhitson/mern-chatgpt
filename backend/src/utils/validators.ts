import { Request, Response, NextFunction } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

// custom validator
export const validate = (validations: ValidationChain[]) => {
    console.log("b");
    return async (req: Request, res: Response, next: NextFunction) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};

export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password")
    .trim()
    .isLength({ min: 10 })
    .withMessage("Password should contian at least 10 characters"),
];

export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator,
];

export const chatPromptValidator = [
    body("message").notEmpty().withMessage("Message is required"),
];
