import React, { Component } from 'react';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  render() {
    return (
      <form>
        <label htmlFor="newTodo">New Todo</label>
        <input
          type="text"
          id="newTodo"
          name="newTodo"
          placeholder="New Todo"
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
        <button>ADD TODO</button>
      </form>
    );
  }
}
