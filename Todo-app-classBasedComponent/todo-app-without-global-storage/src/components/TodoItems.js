import { Component } from "react";

class TodoItem extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            isEditing: false,
        };

        this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleEditButton = this.handleEditButton.bind(this);
        this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
        this.handleSaveButton = this.handleSaveButton.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
    }

    componentDidMount() {
        this.setState({
            title: this.props.todo.title,
        });
    }

    // handle update button (mark done/undone)
    handleUpdateTodo() {
        this.props.updateTodo(this.props.todo.id);
    }

    // handle Delete button (delete todo)
    handleDeleteTodo() {
        this.props.deleteTodo(this.props.todo.id);
    }

    handleEditButton() {
        this.setState({
            isEditing: true,
        })
    }

    // handle Save button (save todo)
    handleSaveButton() {
        if(this.state.title.trim() === '') {
            alert('Please enter valid todo name');
            return;
        }
        this.props.updateTodo(this.props.todo.id, this.state.title);
        this.setState({
            isEditing: false,
        });
    }

    // handle cancel button
    handleDeleteButton() {
        this.setState({
            isEditing: false,
            title: this.props.todo.title,
        });
    }

    // handle onChange input event
    handleOnChangeInput(event) {
        this.setState((prevState) => {
            return {
                title: event.target.value,
            }
        })
    }
    render() {
        return (
            <div className={`item ${this.props.todo.done ? 'done' : ''}`}>
                {this.state.isEditing && <input type="text" className="changeTitle" value={this.state.title} onChange={this.handleOnChangeInput} />}   

                {
                    !this.state.isEditing && (
                        <h3 className="todo-name">{this.props.todo.title}</h3>
                    ) 
                }

                <div className="btns">

                    {!this.state.isEditing && (
                        <>
                            <button 
                                className="mark-done btn"
                                onClick={this.handleUpdateTodo}
                            >
                                {this.props.todo.done ? 'Unmark' : 'Done'}
                            </button>

                            <button 
                                className="delete btn" 
                                onClick={this.handleDeleteTodo}
                            >
                                Delete
                            </button>

                            <button 
                                className="edit btn" 
                                onClick={this.handleEditButton}
                            >
                                Edit
                            </button>
                        </>
                    )}

                    {this.state.isEditing && (
                        <>
                            <button 
                                className="save btn" 
                                onClick={this.handleSaveButton}
                            >
                                Save
                            </button>
                            
                            <button 
                                className="cancel btn" 
                                onClick={this.handleDeleteButton}
                            >
                                Cancel
                            </button>
                            
                        </>
                    )}
                </div>
            </div>
        );
    }
}

export default TodoItem;