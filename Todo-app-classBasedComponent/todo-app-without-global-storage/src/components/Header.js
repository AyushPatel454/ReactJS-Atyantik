import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header>
                <h3 id="status">Total Todo: {this.props.totalTodo} | Done: {this.props.doneTodo} | Undone: {this.props.undoneTodo}</h3>
                <hr />
                <h1>To Do App</h1>
            </header>
        );
    }
}

export default Header;