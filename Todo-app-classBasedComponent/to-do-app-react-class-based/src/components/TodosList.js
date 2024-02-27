import { Component } from "react";
import TodoContext from "../store/todo-context";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    static contextType = TodoContext;
    render() {
        return(
            <>
                {this.context.todos.map((todo) => {
                    // console.log("Inside the TodoList component", todo);
                    return (
                        <TodoItem key={todo.id} todo={todo} />
                    )
                })}
            </>
        );
    }
}

export default TodoList;