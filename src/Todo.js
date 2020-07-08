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
    this.handleToggleDone = this.handleToggleDone.bind(this);
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
  handleToggleDone() {
    this.props.toggleDone(this.props.id);
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
        <div className="Todo">
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
        <div className="Todo">
          <li
            onClick={this.handleToggleDone}
            className={this.props.done ? 'Todo-todo done' : 'Todo-todo'}
          >
            {this.props.todo}
          </li>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleDeleteTodo}>X</button>
        </div>
      );
    }
    return result;
  }
}
