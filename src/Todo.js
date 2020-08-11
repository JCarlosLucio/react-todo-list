import React, { useContext, memo } from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './contexts/todo.context';
import './Todo.css';

function Todo({ id, task, done }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggleState(false);
  return (
    <div className="Todo">
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleIsEditing={toggleIsEditing} />
      ) : (
        <React.Fragment>
          <li
            onClick={() => dispatch({ type: 'TOGGLE_DONE', id })}
            className={done ? 'Todo-todo done' : 'Todo-todo'}
          >
            {task}
          </li>
          <div className="Todo-btns">
            <button onClick={toggleIsEditing}>
              <i className="fas fa-pen-square" />
            </button>
            <button onClick={() => dispatch({ type: 'DELETE', id })}>
              <i className="fas fa-times-circle" />
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default memo(Todo);
