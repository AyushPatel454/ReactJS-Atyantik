import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index.js';

import classes from './Counter.module.css';

const Counter = () => {
  // set automatically subscription to the store.
  // it will be called whenever the store changes
  // so that it can get the latest state and re-render the component
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const  dispatch = useDispatch(); // return a function that we can call to dispatch an action.

  // it will be called whenever the increment button is clicked
  const incrementHandler = () => {
    // dispatch an action to the store. the action is pass to the reducer function in the store & the reducer function will update the state.
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(9)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 9}
  }

  // when the decrement button is clicked, it will dispatch an action to the store.
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 9</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;