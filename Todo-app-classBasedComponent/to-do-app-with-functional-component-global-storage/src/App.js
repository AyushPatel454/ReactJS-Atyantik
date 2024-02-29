import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from './store/todo-splice.js';
import Header from './components/Header.js';
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
  const dispatch = useDispatch();

  // load the data from the local storage.
  useEffect(() => {
    dispatch(todoActions.loadFromLocalStorage());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Form />
      <TodoList />
    </>
  );
}

export default App;
