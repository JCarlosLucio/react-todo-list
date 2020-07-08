import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  addTodo(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  deleteTodo(id) {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  }
  updateTodo(id, updatedTodo) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todo: updatedTodo };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleDone(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    return (
      <div className="TodoList">
        <div className="TodoList-header">
          <h1>React Todo List</h1>
          <NewTodoForm addTodo={this.addTodo} />
        </div>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              done={todo.done}
              deleteTodo={this.deleteTodo}
              updateTodo={this.updateTodo}
              toggleDone={this.toggleDone}
            />
          ))}
        </ul>
      </div>
    );
  }
}
