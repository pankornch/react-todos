import React from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom"; 
import './assets/index.css';
import AddTodo from "./components/AddTodo";
import Render from "./components/RenderData";
import Header from './components/Header'
import Request from './components/RequestData'
import io from 'socket.io-client';
const URL = {
  localhost: "http://localhost:5050",
  deploy: ""
}

class App extends React.Component {
  state = {
    todos: [],
    socket: {}
  };

  componentDidMount() {
    this.setState({
      socket: io.connect(`${URL.localhost}`)
    });
  }

  AddTodo = (todo) => {
    this.state.socket.emit("addTodo", todo);

  }

  Completed = (id) => {


    let isComplete = this.state.todos.find(el => el.id === id).completed
    const status = isComplete = !isComplete
    this.state.socket.emit("updateCompleted", { id, status });

  }

  DeleteTodo = (id) => {
    this.state.socket.emit("deleteTodo", id);
  }

  Ontest = (todos) => {
    this.setState({ todos });
  }

  render() {
    return (
      <div className="container">
        <div className="center">
          <Header />
        </div>
        <div className="center">
          <AddTodo addTodo={this.AddTodo} previewText={this.PreviewText} />
        </div>
        <div className="center">
          <Render data={this.state.todos} completed={this.Completed} deleteTodo={this.DeleteTodo} />
        </div>
        <div>
          <Request onTest={this.Ontest} />
        </div>
      </div>
    );
  }
}

export default App;
