import React from 'react';
import useInputState from './hooks/useInputState';
import './EditTodoForm.css';

function EditTodoForm({ id, task, updateTodo, toggleIsEditing }) {
  const [updatedTask, handleChange] = useInputState(task);
  return (
    <form
      className="EditTodoForm"
      onSubmit={(e) => {
        e.preventDefault();
        updateTodo(id, updatedTask);
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
