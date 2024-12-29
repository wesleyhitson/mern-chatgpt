
# MERN Stack AI Chatbot

This is an AI Chatbot application, inspired by ChatGPT, using MERN Stack and OpenAI.

It's a customized chatbot where each message of the user is stored in DB and can be retrieved and deleted.

It's a completely secure application using JWT Tokens, HTTP-Only Cookies, Signed Cookies, Password Encryption, and Middleware Chains.

To run the application locally, cd into the `backend` dir and run `npm run dev`.

Following the tutorial from FreeCodeCamp: https://www.youtube.com/watch?v=wrHTcjSZQ1Y&list=WL&index=1

Key insights:
- In JavaScript, there is a difference between a `String` and a `string`. The former is an object (and thus can have properties), and the latter is a primitive, and is immutable. `string` is apparently generally more performant, and should be used in method signatures, which is my main use case other than variable declaration. However, `String` should be used with Mongoose.

