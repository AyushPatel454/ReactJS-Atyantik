import { useSelector } from "react-redux";
import TodoItem from "./TodoItem.js";

export default function TodoList() {
    const todos = useSelector(state => state.todos.todos);
    return (
        <>
            {todos.map((todo) => {

                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                )
            })}
        </>
    );
}