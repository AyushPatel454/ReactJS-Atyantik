import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  constructor() {
    // super is used to call the constructor of the parent class. -- needed other wise it will throw an error.
    super();
    // you can done initialization here.
    // state is always an Object. // & it's name always  be state. (so when we want to define state then we have to use this.state = {})
    this.state = {
      showUsers: true,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.users.length === 0) {
      throw new Error("No user available...!!");
    }
  }

  // ---> Defining method.
  toggleUsersHandler() {
    // ---> Update the state.
    // this.state.showUsers = !this.state.showUsers; // Don't do this // NOT use
    this.setState((curState) => {
      return {
        showUsers: !curState.showUsers, // it will merge with existing state not replace it.
      }
    })
  }
  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (<div className={classes.users}>
      <button onClick={this.toggleUsersHandler.bind(this)}> {/* this.toggleUsersHandler.bind(this) is used to bind the context of this to the function */}
        {this.state.showUsers ? 'Hide' : 'Show'} Users
      </button>
      {this.state.showUsers && usersList}
    </div>)
  }
}

export default Users;
