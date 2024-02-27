import { Component } from 'react';
import classes from './User.module.css';

class User extends Component {

  // (Life cycle method)
  // if will be execute once when the component is unmounted (removed from the DOM).
  componentWillUnmount() {
    console.log("User will unmount...!!"); // it will execute when the component is removed from the DOM.
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
