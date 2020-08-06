import React, { Component } from 'react';
import '../assets/index.css'
import { v4 } from 'uuid';
class AddData extends Component {

    add = (e) => {
        e.preventDefault();
        if (!e.target.todo.value) return;

        this.props.addTodo({
            id: v4(),
            title: e.target.todo.value,
            time: new Date(),
            completed: false
        });
        e.target.todo.value = "";
        this.setState({ submit: true });
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.add}>
                    <input onChange={this.previewText} type="text" id="todo" placeholder="What do you need to do today?" />
                    <input type="submit" value="Add" />
                </form>

            </div>
        )
    }
}

export default AddData