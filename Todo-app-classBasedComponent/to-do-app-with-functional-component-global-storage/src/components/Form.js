import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo-splice";

export default function Form() {
    const todoInputRef = useRef(); // for getting input value.

    const [error, setError] = useState({
        hasError: false,
        errorMessage: '',
    });

    const dispatch = useDispatch(); // for dispatch an todo action

    // ---> handle submit form.
    function handleSubmit(event) {
        event.preventDefault();

        // get the input value
        const enteredTodo = todoInputRef.current.value;

        // validate the input
        if (enteredTodo.trim().length === 0) {
            setError(prevState => ({
                hasError: true,
                errorMessage: "Please enter a valid todo",
            }));

            return;
        } else if (enteredTodo.trim().length < 3) {
            setError(prevState => ({
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
        dispatch(todoActions.addTodo(newTodo))

        // reset form
        event.target.reset();

        if(error.hasError) {
            setError(prevState => ({
                hasError: false,
                errorMessage: "",
            }))
        }
    }

    return (
        <>
            {
                error.hasError && 
                <p>{error.errorMessage}</p>
            }

            <form onSubmit={handleSubmit}>
                <input 
                    ref={todoInputRef} 
                    type="text" 
                    name="todo" 
                    placeholder="Enter your todo" 
                />

                <button 
                    type="submit" 
                    className="btn" 
                    style={{ display: 'block' }}
                >
                    Add
                </button>
            </form>
        </>
    );
}