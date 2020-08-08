import React, { useContext } from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './contexts/todo.context';
import './Todo.css';

function Todo({ id, task, done, updateTodo, deleteTodo }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggleState(false);
  return (
    <div className="Todo">
      {isEditing ? (
        <EditTodoForm
          id={id}
          task={task}
          updateTodo={updateTodo}
          toggleIsEditing={toggleIsEditing}
        />
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
