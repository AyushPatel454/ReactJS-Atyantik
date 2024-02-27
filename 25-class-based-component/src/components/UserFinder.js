import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

class UserFinder extends Component {
    static contextType = UsersContext;

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
        this.setState({ filteredUsers: this.context.users });
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
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
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
                <ErrorBoundary> {/* ErrorBoundary is used to catch the error from the child component. */}
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }

}

export default UserFinder;