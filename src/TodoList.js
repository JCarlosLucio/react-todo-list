import React, { useContext } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { TodosContext } from './contexts/todo.context';
import './TodoList.css';

function TodoList() {
  const todos = useContext(TodosContext);
  return (
    <div className="TodoList">
      <div className="TodoList-header">
        <h1>React Todo List</h1>
      </div>
      <NewTodoForm />
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo} // id, task, done
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
