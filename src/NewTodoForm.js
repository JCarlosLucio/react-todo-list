import React, { Component } from 'react';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    };
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
        />
        <button>ADD TODO</button>
      </form>
    );
  }
}
