import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/todo.context';
import './EditTodoForm.css';

function EditTodoForm({ id, task, toggleIsEditing }) {
  const dispatch = useContext(DispatchContext);
  const [updatedTask, handleChange] = useInputState(task);
  return (
    <form
      className="EditTodoForm"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE', id, updatedTask });
        toggleIsEditing();
      }}
    >
      <input
        type="text"
        name="updatedTask"
        placeholder="Edit Todo"
        value={updatedTask}
        onChange={handleChange}
        autoFocus
      />
      <button>Save</button>
    </form>
  );
}

export default EditTodoForm;
