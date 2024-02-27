import { Component } from "react";
import TodoContext from "../store/todo-context";

class TodoItem extends Component {
    static contextType = TodoContext;

    // handle update button (mark done/undone)
    handleUpdateTodo() {
        this.context.updateTodo(this.props.todo.id);
    }

    // handle Delete button (delete todo)
    handleDeleteTodo() {
        this.context.deleteTodo(this.props.todo.id);
    }
    render() {
        return (
            <div className={`item ${this.props.todo.done ? 'done' : ''}`}>
                <h3 className="todo-name">{this.props.todo.title}</h3>
                <div className="btns">
                    <button className="mark-done btn" onClick={this.handleUpdateTodo.bind(this)}>{this.props.todo.done ? 'Unmark' : 'Done'}</button>
                    <button className="delete btn" onClick={this.handleDeleteTodo.bind(this)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default TodoItem;