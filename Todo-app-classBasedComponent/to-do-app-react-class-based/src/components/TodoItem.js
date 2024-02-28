import { Component, createRef } from "react";
import TodoContext from "../store/todo-context";

class TodoItem extends Component {
    static contextType = TodoContext;

    constructor() {
        super();
        this.state = {
            title: '',
            isEditing: false,
        };
        this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
    }

    componentDidMount() {
        this.setState({
            title: this.props.todo.title,
        });
    }

    // handle update button (mark done/undone)
    handleUpdateTodo() {
        this.context.updateTodo(this.props.todo.id);
    }

    // handle Delete button (delete todo)
    handleDeleteTodo() {
        this.context.deleteTodo(this.props.todo.id);
    }

    // handle Save button (save todo)
    handleSaveButton() {
        this.context.updateTodo(this.props.todo.id, this.state.title);
        this.setState({
            isEditing: false,
        });
    }
    render() {
        return (
            <div className={`item ${this.props.todo.done ? 'done' : ''}`}>
                {this.state.isEditing && <input type="text" className="changeTitle"  value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />}

                {!this.state.isEditing && <h3 className="todo-name">{this.props.todo.title}</h3>}
                <div className="btns">

                    {!this.state.isEditing && <button className="mark-done btn" onClick={this.handleUpdateTodo}>{this.props.todo.done ? 'Unmark' : 'Done'}</button>}

                    {!this.state.isEditing && <button className="delete btn" onClick={this.handleDeleteTodo.bind(this)}>Delete</button>}

                    {!this.state.isEditing && <button className="edit btn" onClick={() => this.setState({ isEditing: true })}>Edit</button>}

                    {this.state.isEditing && <button className="save btn" onClick={this.handleSaveButton.bind(this)}>Save</button>}

                    {this.state.isEditing && <button className="cancel btn" onClick={() => this.setState({ isEditing: false, title: this.props.todo.title, })}>Cancel</button>}
                </div>
            </div>
        );
    }
}

export default TodoItem;