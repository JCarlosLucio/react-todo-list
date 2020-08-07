import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/todo.context';
import './NewTodoForm.css';

function NewTodoForm() {
  const [task, handleChange, reset] = useInputState('');
  const dispatch = useContext(DispatchContext);
  return (
    <form
      className="NewTodoForm"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'ADD', task });
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
