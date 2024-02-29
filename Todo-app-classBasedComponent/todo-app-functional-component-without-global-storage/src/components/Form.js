import { useState } from "react";

export default function Form({addTodo}) {
    const [todoInfo, setTodoInfo] = useState({
        todo: "",
        hasError: false,
        errorMessage: "",
    });

    // ---> when form is submitted.
    function handleSubmit(event) {
        event.preventDefault();

        // get the input value
        const enteredTodo = event.target['todo'].value;

        // validate the input
        if (enteredTodo.trim().length === 0) {
            setTodoInfo(prevState => ({
                ...prevState,
                hasError: true,
                errorMessage: "Please enter a valid todo",
            }));
            return;
        } else if (enteredTodo.trim().length < 3) {
            setTodoInfo(prevState => ({
                ...prevState,
                hasError: true,
                errorMessage: "Todo should be at least 3 characters",
            }));
            return;
        }

        // create a new todo object
        const newTodo = {
            id: Math.random(),
            title: enteredTodo,
            done: false,    
        };

        // add the new todo to the todo list
        addTodo(newTodo);

        // reset form
        event.target.reset();

        setTodoInfo(prevState => ({
            todo: '',
            hasError: false,
            errorMessage: "",
        }));
    }

    // ---> handle validation
    function handleValidation(event) {
        const enteredTodo = event.target.value;
        if (enteredTodo.trim().length === 0 && todoInfo.hasError) {
            setTodoInfo(prevState => ({
                todo: enteredTodo,
                hasError: true,
                errorMessage: "Please enter a valid todo",
            }));

            return;
        } else if (enteredTodo.trim().length < 3 && todoInfo.hasError) {
            setTodoInfo(prevState => ({
                todo: enteredTodo,
                hasError: true,
                errorMessage: "Todo should be at least 3 characters",
            }));
            return;
        }
        setTodoInfo(prevState => ({
            todo: enteredTodo,
            hasError: false,
            errorMessage: "",
        }));
    }

    return (
        <>
            {todoInfo.hasError && <p>{todoInfo.errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" onChange={handleValidation} value={todoInfo.todo} placeholder="Enter your todo" />
                <button type="submit" className="btn" style={{ display: 'block' }}>Add</button>
            </form>
        </>
    );
}