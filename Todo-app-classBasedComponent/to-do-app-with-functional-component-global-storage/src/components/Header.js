import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
    const todos = useSelector(state => state.todos.todos);

    const doneTodo = todos.filter(todo => todo.done).length;
    const undoneTodo = todos.length - doneTodo;
    return (
        <header>
            <h3 id="status">
                Total Todo: {todos.length} | Done: {doneTodo} | Undone: {undoneTodo}
            </h3>

            <hr />

            <h1>To Do App (Functional Components & Hooks)</h1>
        </header>
    );
}