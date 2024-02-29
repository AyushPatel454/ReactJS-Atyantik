import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todo-splice.js";

// creating global store for accessing application data.
const store = configureStore({
    reducer: {todos: TodoReducer}
});

export default store;