import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo({ ...this.state, id: uuidv4(), done: false });
    this.setState({ todo: '' });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="newTodo">New Todo</label>
        <input
          type="text"
          id="newTodo"
          placeholder="New Todo"
          name="todo"
          required={true}
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <button>ADD TODO</button>
      </form>
    );
  }
}
