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
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  deleteTodo(id) {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm addTodo={this.addTodo} />
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.newTodo}
            deleteTodo={this.deleteTodo}
          />
        ))}
      </div>
    );
  }
}
