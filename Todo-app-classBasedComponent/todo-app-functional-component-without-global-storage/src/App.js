import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

const isFirst = true;

function App() {
  const [todos, setTodos] = useState([]);

  // ---> Load todo from the local storage.
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todoList") || "[]");
    setTodos(prevState => data);
  } , [])

  // ---> add todo
  function addTodoHandler(todo) {
    setTodos(prevState => {
      const todosList = [...prevState, todo]; // deep copy of prevState + new Todo

      // update in local storage
      localStorage.setItem("todoList", JSON.stringify(todosList));

      // return updated state so it can be used by other component also.
      return todosList;
    });
  }

  // ---> update todo
  function updateTodoHandler(id, title = '') {
    setTodos(prevState => {
      const todosList = prevState.map(todo => {
        if (todo.id === id) {
          const done = title !== '' ? todo.done : !todo.done; // check i change title or status of todo.
          return { ...todo, title: title !== '' ? title : todo.title, done };
        }
        return todo;
      });

      localStorage.setItem("todoList", JSON.stringify(todosList));
      return todosList;
    });
  }

  // delete todo
  function deleteTodoHandler(id) {
    setTodos(prevState => {
      const todosList = prevState.filter(todo => todo.id !== id);

      localStorage.setItem("todoList", JSON.stringify(todosList));
      return todosList;
    });
  }
  return (
    <>
      <Header todos={todos} />
      <Form addTodo={addTodoHandler} />
      <TodoList todos={todos} updateTodo={updateTodoHandler} deleteTodo={deleteTodoHandler} />
    </>
  );
}

export default App;
