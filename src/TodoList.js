import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm />
        <Todo />
      </div>
    );
  }
}
