import React, { useState } from 'react';
import './Todo.css';

function Todo({ id, task, done, deleteTodo, updateTodo, toggleDone }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);
  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form
          className="Todo-edit-form"
          onSubmit={(e) => {
            e.preventDefault();
            updateTodo(id, updatedTask);
            setIsEditing(!isEditing);
          }}
        >
          <input
            type="text"
            name="editTodo"
            placeholder="Edit Todo"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
          />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          onClick={() => toggleDone(id)}
          className={done ? 'Todo-todo done' : 'Todo-todo'}
        >
          {task}
        </li>
        <div className="Todo-btns">
          <button onClick={() => setIsEditing(!isEditing)}>
            <i className="fas fa-pen-square" />
          </button>
          <button onClick={() => deleteTodo(id)}>
            <i className="fas fa-times-circle" />
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default Todo;
