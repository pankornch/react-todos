import React, { Component } from 'react';
import io from 'socket.io-client';


class Request extends Component {
    state = {
        socket: {},
    }
    componentDidMount() {
        this.setState({
            socket: io.connect('http://localhost:5050')
        }, () => {
            this.state.socket.emit('reqTodos').on("getTodos", todos => {
                this.props.onTest(todos)
            })
        });
    }

    render() {
        return (<div></div>) 
    }
}

export default Request;