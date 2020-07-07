import React, { Component } from 'react';
import './Todo.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      updatedTodo: this.props.todo,
    };
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }
  handleDeleteTodo() {
    this.props.deleteTodo(this.props.id);
  }
  handleUpdateTodo(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.updatedTodo);
    this.toggleForm();
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdateTodo}>
            <input
              type="text"
              name="updatedTodo"
              placeholder="Edit Todo"
              value={this.state.updatedTodo}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <span className={this.props.done && 'Todo-done'}>
            {this.props.todo}
          </span>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleDeleteTodo}>X</button>
        </div>
      );
    }
    return result;
  }
}
