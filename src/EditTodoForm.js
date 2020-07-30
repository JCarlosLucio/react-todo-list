import React, { useState } from 'react';
import './EditTodoForm.css';

function EditTodoForm({ id, task, updateTodo, toggleIsEditing }) {
  const [updatedTask, setUpdatedTask] = useState(task);
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
        onChange={(e) => setUpdatedTask(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
}

export default EditTodoForm;
