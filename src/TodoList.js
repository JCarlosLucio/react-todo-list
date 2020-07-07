import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

export default class TodoList extends Component {
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
