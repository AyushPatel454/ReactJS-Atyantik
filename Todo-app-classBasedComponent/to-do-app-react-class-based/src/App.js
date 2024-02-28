import { Component } from 'react';
import Header from './components/Header';
import { TodoContextProvider } from './store/todo-context';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodosList';

class App extends Component {
  render() {
    return (
      <TodoContextProvider>
        <Header />
        <Form />
        <TodoList />
      </TodoContextProvider>
    );
  }
}

export default App;
