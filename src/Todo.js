import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }
  handleDeleteTodo() {
    this.props.deleteTodo(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form>
            <input type="text" />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <span>{this.props.todo}</span>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleDeleteTodo}>X</button>
        </div>
      );
    }
    return result;
  }
}
