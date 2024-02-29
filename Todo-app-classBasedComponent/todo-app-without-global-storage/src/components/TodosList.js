import { Component } from "react";
import TodoItem from "./TodoItems.js";

class TodoList extends Component {
    render() {
        return(
            <>
                {this.props.todos.map((todo) => {
                    
                    return (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            updateTodo={this.props.updateTodo} 
                            deleteTodo={this.props.deleteTodo} 
                        />
                    )
                })}
            </>
        );
    }
}

export default TodoList;