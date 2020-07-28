import React, { useState, useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

function TodoList() {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(
    () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    },
    [todos]
  );

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map(
      (todo) => (todo.id === id ? { ...todo, todo: updatedTodo } : todo)
    );
    setTodos(updatedTodos);
  };
  const toggleDone = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="TodoList">
      <div className="TodoList-header">
        <h1>React Todo List</h1>
      </div>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            done={todo.done}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            toggleDone={toggleDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
