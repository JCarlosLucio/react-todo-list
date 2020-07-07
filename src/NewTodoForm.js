import React, { Component } from 'react';

export default class NewTodoForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="newTodo">New Todo</label>
        <input type="text" id="newTodo" name="newTodo" placeholder="New Todo" />
        <button>ADD TODO</button>
      </form>
    );
  }
}
