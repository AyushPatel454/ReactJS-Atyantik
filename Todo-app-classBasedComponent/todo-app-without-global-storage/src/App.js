import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodosList.js';

class App extends Component {
  constructor() {
    super();
    const storedState = JSON.parse(localStorage.getItem("todoList")) || {
      todos: [],
      totalTodo: 0,
      doneTodo: 0,
      undoneTodo: 0,
    };

    this.state = storedState;

    this.updateTodoHandler = this.updateTodoHandler.bind(this);
    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.deleteTodoHandler = this.deleteTodoHandler.bind(this);
  }

  // ---> add todo
  addTodoHandler(todo) {
    this.setState(prevState => {
      const todos = [...prevState.todos, todo]; // deep copy of prevState + new Todo
      const totalTodo = prevState.totalTodo + 1; // total todo
      const undoneTodo = prevState.undoneTodo + 1; // remaining todo
      const doneTodo = prevState.doneTodo; // done todo

      // new state (updated state)
      const newState = { todos, totalTodo, doneTodo, undoneTodo };

      // update in local storage
      localStorage.setItem("todoList", JSON.stringify(newState));

      // return updated state so it can be used by other component also.
      return newState;
    });
  }

  // ---> update todo
  updateTodoHandler(id, title = '') {
    this.setState(prevState => {
      const todos = prevState.todos.map(todo => {
        if (todo.id === id) {
          const done = title !== '' ? todo.done : !todo.done; // check i change title or status of todo.
          return { ...todo, title: title !== '' ? title : todo.title, done };
        }
        return todo;
      });
      const doneTodo = todos.filter(todo => todo.done).length;
      const undoneTodo = prevState.totalTodo - doneTodo;
      const newState = { todos, totalTodo: prevState.totalTodo, doneTodo, undoneTodo };
      localStorage.setItem("todoList", JSON.stringify(newState));
      return newState;
    });
  }

  // delete todo
  deleteTodoHandler(id) {
    this.setState(prevState => {
      const todos = prevState.todos.filter(todo => todo.id !== id);
      const totalTodo = prevState.totalTodo - 1;
      const doneTodo = todos.filter(todo => todo.done).length;
      const undoneTodo = totalTodo - doneTodo;
      const newState = { todos, totalTodo, doneTodo, undoneTodo };
      localStorage.setItem("todoList", JSON.stringify(newState));
      return newState;
    });
  }

  render() {
    return (
      <>
        <Header 
          totalTodo={this.state.totalTodo} 
          doneTodo={this.state.doneTodo} 
          undoneTodo={this.state.undoneTodo} 
        />

        <Form addTodo={this.addTodoHandler} />

        <TodoList 
          todos={this.state.todos} 
          updateTodo={this.updateTodoHandler} 
          deleteTodo={this.deleteTodoHandler} 
        />
      </>
    );
  }
}

export default App;