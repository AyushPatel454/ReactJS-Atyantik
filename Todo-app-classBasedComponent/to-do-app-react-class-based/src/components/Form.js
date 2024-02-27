import { Component } from "react";
import TodoContext from "../store/todo-context";

class Form extends Component {
    static contextType = TodoContext;
    constructor() {
        super();
        this.state = {
            todo: "",
            hasError: false,
            errorMessage: "",
        };
    }

    // ---> when form is submitted.
    handleSubmit(event) {
        event.preventDefault();

        // get the input value
        const enteredTodo = event.target['todo'].value;

        // validate the input
        if (enteredTodo.trim().length === 0) {
            this.setState({
                hasError: true,
                errorMessage: "Please enter a valid todo",
            });
            return;
        } else if (enteredTodo.trim().length < 3) {
            this.setState({
                hasError: true,
                errorMessage: "Todo should be at least 3 characters",
            });
            return;
        }

        // create a new todo object
        const newTodo = {
            id: Math.random(),
            title: enteredTodo,
            done: false,
        };

        // add the new todo to the todo list
        this.context.addTodo(newTodo);

        // reset form
        event.target.reset();

        this.setState({
            todo: '',
            hasError: false,
            errorMessage: "",
        })
    }

    // ---> handle validation
    handleValidation(event) {
        const enteredTodo = event.target.value;
        if (enteredTodo.trim().length === 0 && this.state.hasError) {
            this.setState({
                todo: enteredTodo,
                hasError: true,
                errorMessage: "Please enter a valid todo",
            });
            return;
        } else if (enteredTodo.trim().length < 3 && this.state.hasError) {
            this.setState({
                todo: enteredTodo,
                hasError: true,
                errorMessage: "Todo should be at least 3 characters",
            });
            return;
        }
        this.setState({
            todo: enteredTodo,
            hasError: false,
            errorMessage: "",
        });
    }

    render() {
        return (
            <>
                {this.state.hasError && <p>{this.state.errorMessage}</p>}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="todo" onChange={this.handleValidation.bind(this)} value={this.state.todo} placeholder="Enter your todo" />
                    <button type="submit" className="btn" style={{display: 'block'}}>Add</button>
                </form>
            </>
        );
    }
}

export default Form;