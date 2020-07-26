import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

function NewTodoForm({ addTodo }) {
  const [todo, setTodo] = useState('');
  return (
    <form
      className="NewTodoForm"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo({ id: uuidv4(), todo: todo, done: false });
        setTodo('');
      }}
    >
      <label htmlFor="newTodo">New Todo</label>
      <input
        type="text"
        id="newTodo"
        placeholder="New Todo"
        name="todo"
        required={true}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>ADD TODO</button>
    </form>
  );
}

export default NewTodoForm;
