import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import './Todo.css';

function Todo({ id, task, done, deleteTodo, updateTodo, toggleDone }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  return (
    <div className="Todo">
      {isEditing ? (
        <EditTodoForm
          id={id}
          task={task}
          updateTodo={updateTodo}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </div>
  );
}

export default Todo;
