import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  return (
    <form
      className="NewTodoForm"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo({ id: uuidv4(), task: task, done: false });
        setTask('');
      }}
    >
      <label htmlFor="newTodo">New Todo</label>
      <input
        type="text"
        id="newTodo"
        placeholder="New Todo"
        name="todo"
        required={true}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>ADD TODO</button>
    </form>
  );
}

export default NewTodoForm;
