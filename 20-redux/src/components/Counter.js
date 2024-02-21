import { useSelector, useDispatch, connect } from 'react-redux';

import classes from './Counter.module.css';
import { Component } from 'react';

// const Counter = () => {
//   // set automatically subscription to the store.
//   // it will be called whenever the store changes
//   // so that it can get the latest state and re-render the component
//   const counter = useSelector(state => state.counter);

//   const  dispatch = useDispatch(); // return a function that we can call to dispatch an action.

//   // it will be called whenever the increment button is clicked
//   const incrementHandler = () => {
//     // dispatch an action to the store. the action is pass to the reducer function in the store & the reducer function will update the state.
//     dispatch({type: 'increment'});
//   };

//   // when the decrement button is clicked, it will dispatch an action to the store.
//   const decrementHandler = () => {
//     dispatch({type: 'decrement'});
//   };

//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;


class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      <div>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
      </div>
      <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
    </main>
    );
  }
}

// connect is a function that returns a higher order component
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

// mapDispatchToProps is a function that returns a higher order component.
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: 'increment'}),
    decrement: () => dispatch({type: 'decrement'})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
