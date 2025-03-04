
# Backend README

To run the application locally, cd into the `backend` dir and run `npm run dev`.


Key insights:
- In JavaScript, there is a difference between a `String` and a `string`. The former is an object (and thus can have properties), and the latter is a primitive, and is immutable. `string` is apparently generally more performant, and should be used in method signatures, which is my main use case other than variable declaration. However, `String` should be used with Mongoose.
- `/frontend/src/main.tsx` is the entry point of the frontend.