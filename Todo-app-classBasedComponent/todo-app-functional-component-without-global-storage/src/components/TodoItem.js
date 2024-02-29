import { useEffect, useState } from "react";

export default function TodoItem({ todo , updateTodo , deleteTodo}) {
    const [state, setState] = useState({
        title: '',
        isEditing: false,
    });

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            title: todo.title,
        }))
    },[todo]);

    // handle update button (mark done/undone)
    function handleUpdateTodo() {
        updateTodo(todo.id);
    }

    // handle Delete button (delete todo)
    function handleDeleteTodo() {
        deleteTodo(todo.id);
    }

    function handleEditButton() {
        setState(prevState => ({
            ...prevState,
            isEditing: true,
        }));
    }

    // handle Save button (save todo)
    function handleSaveButton() {
        if (state.title.trim() === '') {
            alert('Please enter valid todo name');
            return;
        }
        // update todo
        updateTodo(todo.id, state.title);

        setState(prevState => ({
            ...prevState,
            isEditing: false,
        }));
    }

    // handle cancel button
    function handleDeleteButton() {
        setState(prevState => ({
            ...prevState,
            isEditing: false,
            title: todo.title,
        }));
    }

    // handle onChange input event
    function handleOnChangeInput(event) {
        setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            }
        })
    }

    return (
        <div className={`item ${todo.done ? 'done' : ''}`}>
            {state.isEditing && <input type="text" className="changeTitle" value={state.title} onChange={handleOnChangeInput} />}

            {
                !state.isEditing && (
                    <h3 className="todo-name">{todo.title}</h3>
                )
            }

            <div className="btns">

                {!state.isEditing && (
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

                {state.isEditing && (
                    <>
                        <button
                            className="save btn"
                            onClick={handleSaveButton}
                        >
                            Save
                        </button>

                        <button
                            className="cancel btn"
                            onClick={handleDeleteButton}
                        >
                            Cancel
                        </button>

                    </>
                )}
            </div>
        </div>
    );
}