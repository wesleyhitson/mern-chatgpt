
# MERN Stack AI Chatbot

This is an AI Chatbot application, inspired by ChatGPT, using MERN Stack and OpenAI.

It's a customized chatbot where each message of the user is stored in DB and can be retrieved and deleted.

It's a completely secure application using JWT Tokens, HTTP-Only Cookies, Signed Cookies, Password Encryption, and Middleware Chains.

To run the application locally, cd into the `backend` dir and run `npm run dev`.

To create the frontend, run `npm create vite@latest`, install if needed, and then go through the options. I named the project "frontend", so there's a backend dir and a frontend dir. Then, follow the instructions (`cd frontend`, `npm i`, `npm run dev`).

We are going to use [Material UI](https://mui.com) to style the application. We are also going to use [React Icons](https://react-icons.github.io/react-icons/), [React Router Dom](https://reactrouter.com/), and [React Hot Toast](https://react-hot-toast.com/).

All of those can be installed at once, so in the `frontend` directory, run `npm install @mui/material @emotion/react @emotion/styled react-icons react-router-dom react-hot-toast`.

Following the tutorial from FreeCodeCamp: https://www.youtube.com/watch?v=wrHTcjSZQ1Y&list=WL&index=1

Key insights:
- In JavaScript, there is a difference between a `String` and a `string`. The former is an object (and thus can have properties), and the latter is a primitive, and is immutable. `string` is apparently generally more performant, and should be used in method signatures, which is my main use case other than variable declaration. However, `String` should be used with Mongoose.
- `/frontend/src/main.tsx` is the entry point of the frontend.