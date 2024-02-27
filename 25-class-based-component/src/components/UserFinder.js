import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
    // --> define initial state.
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        };
    }

    // (Life cycle method)
    // if will be execute once when the component is mounted.
    // it like a ---> useEffect( () => {}, [])
    componentDidMount() {
        // send HTTP request... ... ...
        this.setState({ filteredUsers: DUMMY_USERS });
    }

    // (Life cycle method)
    // if will be execute when ever the component is updated.
    // it like a ---> useEffect( () => {}, [dependency])
    // in below my dependency is this.state.searchTerm (if it's value is changed then it will execute)
    componentDidUpdate(prevProps, prevState) {
        // --> check if the previous state is not equal to the current state.
        // if equal then no need to update the state.
        // if now equal then update the state.
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))
            });
        }
    }

    // --> define method.
    searchChangeHandler(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
            </Fragment>
        );
    }

}

export default UserFinder;