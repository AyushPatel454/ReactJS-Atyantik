import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo-splice";
import { useRef, useState } from "react";

export default function TodoItem({todo}) {
    const [isEditing, setIsEditing] = useState(false);
    const [initialName, setInitialName] = useState(todo.title);
    const dispatch = useDispatch();

    // ---> update todo
    function handleUpdateTodo() {
        dispatch(todoActions.updateTodo({
            id: todo.id,
            done: !todo.done,
            title: todo.title,
        }));
    }

    // ---> delete todo
    function handleDeleteTodo() {
        dispatch(todoActions.deleteTodo(todo.id));
    }

    // handle edit button for display input field
    function handleEditButton() {
        setIsEditing(prevState => true);
    }

    // ---> save new todo name
    function handleSaveButton() {
        
        if(initialName.trim() === '') {
            alert("Title of todo can not be empty.");
            return;
        }  

        dispatch(todoActions.updateTodo({
            id: todo.id,
            done: todo.done,
            title: initialName.trim(),
        }))

        setIsEditing(prevState => false);
    }

    // ---> close the change name of todo input field.
    function handleCancelButton() {
        setIsEditing(prevState => false);
    }

    // ---> for updating the value of new todo name input field.
    function handleChange(event) {
        setInitialName(prevName => event.target.value);
    }

    return (
        <>
            <div className={`item ${todo.done ? 'done' : ''}`}>
                {
                    isEditing && 
                    <input 
                        type="text" 
                        className="changeTitle"
                        value={initialName}
                        onChange={handleChange}
                    />
                }

                {
                    !isEditing && (
                        <h3 className="todo-name">{todo.title}</h3>
                    )
                }

                <div className="btns">

                    {!isEditing && (
                        <>
                            <button
                                className="mark-done btn"
                                onClick={handleUpdateTodo}
                            >
                                {todo.done ? 'Unmark' : 'Done'}
                            </button>

                            <button
                                className="delete btn"
                                onClick={handleDeleteTodo}
                            >
                                Delete
                            </button>

                            <button
                                className="edit btn"
                                onClick={handleEditButton}
                            >
                                Edit
                            </button>
                        </>
                    )}

                    {isEditing && (
                        <>
                            <button
                                className="save btn"
                                onClick={handleSaveButton}
                            >
                                Save
                            </button>

                            <button
                                className="cancel btn"
                                onClick={handleCancelButton}
                            >
                                Cancel
                            </button>

                        </>
                    )}
                </div>
            </div>
        </>
    );
}