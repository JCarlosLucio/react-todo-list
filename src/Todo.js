import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }
  handleDeleteTodo() {
    this.props.deleteTodo(this.props.id);
  }
  render() {
    return (
      <div>
        <span>{this.props.todo}</span>
        <button>Edit</button>
        <button onClick={this.handleDeleteTodo}>X</button>
      </div>
    );
  }
}
