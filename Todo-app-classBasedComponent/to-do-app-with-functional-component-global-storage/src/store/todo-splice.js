import { createSlice } from "@reduxjs/toolkit";

const initialTodo = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialTodo,
    reducers: {
        // ---> Load to do from the local storage.
        loadFromLocalStorage(state, action) {
            const data = JSON.parse(localStorage.getItem("todoList") || "[]");

            state.todos = [...data];  
        },

        // ---> Add todo
        addTodo(state, action) {
            // add do in our todos list.
            state.todos.push(action.payload);

            // add todo in local storage.
            localStorage.setItem("todoList", JSON.stringify(state.todos));
        },

        // ---> update todo
        updateTodo(state, action) {
            // finding index of todo
            const indexOfTodo = state.todos.findIndex((todo) => todo.id === action.payload.id);
            
            // update the todo title
            state.todos[indexOfTodo].title = action.payload.title;
            state.todos[indexOfTodo].done = action.payload.done; // update the todo status

            // update in local storage
            localStorage.setItem("todoList", JSON.stringify(state.todos));
        },

        // delete todo
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);

            // update in local storage
            localStorage.setItem("todoList", JSON.stringify(state.todos));
        },
    }
});

export default todoSlice.reducer;
export const todoActions = todoSlice.actions;