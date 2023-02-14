import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {
            hasError : true
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError){
            return <h1>Something's broken. Try refreshing the page.</h1>
        }
        return this.props.children;
    }


}

export default ErrorBoundary;