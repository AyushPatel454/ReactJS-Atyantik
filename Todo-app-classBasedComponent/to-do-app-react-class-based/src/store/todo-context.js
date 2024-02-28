import { Component, createContext } from "react";

const TodoContext = createContext({
    todos: [],
    totalTodo: 0,
    doneTodo: 0,
    undoneTodo: 0,
    updateTodo: () => {},
    addTodo: () => {},
    deleteTodo: () => {},
});

export default TodoContext;

// ---> for updation in localstorage.
function updateLocalStorage(obj) {
    localStorage.setItem("todoList", JSON.stringify(obj));
}


// ---> Todo context provider.
export class TodoContextProvider extends Component{
    constructor() {
        super();
        this.state = {
            todos: [],
            totalTodo: 0,
            doneTodo: 0,
            undoneTodo: 0,
        };
    }

    // ---> Load todos from the loacal storage when this Component is loaded.
    componentDidMount() {
        const todoList = JSON.parse(localStorage.getItem("todoList")) || {};
        this.setState({
            todos: todoList.todos || [],
            totalTodo: todoList.totalTodo || 0,
            doneTodo: todoList.doneTodo || 0,
            undoneTodo: todoList.undoneTodo || 0,
        });
    }

    // add todo
    addTodoHandler = (todo) => {
        const todoList = [...this.state.todos]; // make deep copy of todo list.
        todoList.push(todo); // add new todo.

        console.log(todoList);

        // update the state.
        this.setState({
            todos: todoList,
            totalTodo: this.state.totalTodo + 1,
            undoneTodo: this.state.undoneTodo + 1,
        });

        // update the local storage.
        const obj = {
            todos: todoList,
            totalTodo: this.state.totalTodo + 1,
            doneTodo: this.state.doneTodo,
            undoneTodo: this.state.undoneTodo + 1,
        };

        updateLocalStorage(obj);
    }

    // ---> update todo
    updateTodoHandler = (id, title='') => {
        const todoIndex = this.state.todos.findIndex((todo) => todo.id === id); // find the index of todo.
        const todo = { ...this.state.todos[todoIndex] }; // copy the todo.
        
        if (title !== '') {
            todo.title = title;
        } else {
            todo.done = !todo.done; // make to do done or undone.
        }
        
        const isDone = todo.done; // check if the todo is done or undone.
        const todoList = [...this.state.todos]; // make deep copy of todo list.
        todoList[todoIndex] = todo; // update the todo list.

        // update the state.
        this.setState({
            todos: todoList,
            doneTodo: title !== '' ? this.state.doneTodo : isDone ? this.state.doneTodo + 1 : this.state.doneTodo - 1,
            // doneTodo: isDone ? this.state.doneTodo - 1 : this.state.doneTodo + 1,
            undoneTodo: title !== '' ? this.state.undoneTodo : isDone ? this.state.undoneTodo - 1 : this.state.undoneTodo + 1,
            // undoneTodo: isDone ? this.state.undoneTodo + 1 : this.state.undoneTodo - 1,
        });

        // update the local storage.
        const obj = {
            todos: todoList,
            totalTodo: this.state.totalTodo,
            doneTodo: title !== '' ? this.state.doneTodo : isDone ? this.state.doneTodo + 1 : this.state.doneTodo - 1,
            // doneTodo: isDone ? this.state.doneTodo - 1 : this.state.doneTodo + 1,
            undoneTodo: title !== '' ? this.state.undoneTodo : isDone ? this.state.undoneTodo - 1 : this.state.undoneTodo + 1,
            // undoneTodo: isDone ? this.state.undoneTodo + 1 : this.state.undoneTodo - 1,
        };

        updateLocalStorage(obj);
    }

    // delete todo
    deleteTodoHandler = (id) => {
        const todoIndex = this.state.todos.findIndex((todo) => todo.id === id); // find the index of todo.
        const isDone = this.state.todos[todoIndex].done; // check if the todo is done or undone.
        // const todo = { ...this.state.todos[todoIndex] }; // copy the todo.
        // todo.splice(todoIndex, 1); // remove the todo.

        const todoList = [...this.state.todos.filter((todo) => todo.id !== id)];

        // update the state.
        this.setState({
            todos: todoList,
            totalTodo: this.state.totalTodo - 1,
            doneTodo: isDone ? this.state.doneTodo - 1 : this.state.doneTodo,
            undoneTodo: isDone ? this.state.undoneTodo : this.state.undoneTodo - 1,
        });

        // update the local storage.
        const obj = {
            todos: todoList,
            totalTodo: this.state.totalTodo - 1,
            doneTodo: isDone ? this.state.doneTodo - 1 : this.state.doneTodo,
            undoneTodo: isDone ? this.state.undoneTodo : this.state.undoneTodo - 1,
        };

        updateLocalStorage(obj);
    }

    render() {
        const todoContextValue = {
            todos: this.state.todos,
            totalTodo: this.state.totalTodo,
            doneTodo: this.state.doneTodo,
            undoneTodo: this.state.undoneTodo,
            updateTodo: this.updateTodoHandler,
            addTodo: this.addTodoHandler,
            deleteTodo: this.deleteTodoHandler,
        };

        return (
            <TodoContext.Provider value={todoContextValue}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}