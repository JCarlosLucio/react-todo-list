import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

function TodoList() {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="TodoList">
      <div className="TodoList-header">
        <h1>React Todo List</h1>
      </div>
      {/* <NewTodoForm addTodo={this.addTodo} /> */}
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            done={todo.done}
            // deleteTodo={this.deleteTodo}
            // updateTodo={this.updateTodo}
            // toggleDone={this.toggleDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

{
  // import React, { Component } from 'react';
  /* export default class TodoList extends Component {
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

  componentDidMount() {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) this.setState({ todos: storedTodos });
  }
  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
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
        </div>
        <NewTodoForm addTodo={this.addTodo} />
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
} */
}
