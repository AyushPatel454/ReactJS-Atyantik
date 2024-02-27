import { Component } from "react";
import TodoContext from "../store/todo-context";

class Header extends Component {
    static contextType = TodoContext;
    render() {
        return (
            <header>
                <h3 id="status">Total Todo: {this.context.totalTodo} | Done: {this.context.doneTodo} | Undone: {this.context.undoneTodo}</h3>
                <hr />
                <h1>To Do App</h1>
            </header>

        );
    }
}

export default Header;