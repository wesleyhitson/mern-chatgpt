import { Configuration } from "openai";

export const configueOpenAI = () => {
    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
        organization: process.env.OPEN_AI_ORGANIZATION_ID,
    });
};
