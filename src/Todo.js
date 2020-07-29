import React, { useState } from 'react';
import EditTodoForm from './EditTodoForm';
import './Todo.css';

function Todo({ id, task, done, deleteTodo, updateTodo, toggleDone }) {
  const [isEditing, setIsEditing] = useState(false);
  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <EditTodoForm
          id={id}
          task={task}
          updateTodo={updateTodo}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
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
