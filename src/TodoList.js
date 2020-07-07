import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm addTodo={this.addTodo} />
        <Todo />
      </div>
    );
  }
}
