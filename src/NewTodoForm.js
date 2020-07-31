import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useInputState from './hooks/useInputState';
import './NewTodoForm.css';

function NewTodoForm({ addTodo }) {
  const [task, handleChange, reset] = useInputState('');
  return (
    <form
      className="NewTodoForm"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo({ id: uuidv4(), task: task, done: false });
        reset();
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
        onChange={handleChange}
      />
      <button>ADD TODO</button>
    </form>
  );
}

export default NewTodoForm;
