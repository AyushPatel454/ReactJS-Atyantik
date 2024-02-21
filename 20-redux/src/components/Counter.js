import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  // set automatically subscription to the store.
  // it will be called whenever the store changes
  // so that it can get the latest state and re-render the component
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
