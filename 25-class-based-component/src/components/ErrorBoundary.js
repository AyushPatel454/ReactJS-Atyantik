import { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        };
    }

    // (Life cycle method)
    // it will execute when ever the child component throw an error.
    componentDidCatch(error) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong...!!</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;