import React from 'react';
import TodoList from './TodoList';
import MadeBy from './MadeBy';
import { TodosProvider } from './contexts/todo.context';

function App() {
  return (
    <React.Fragment>
      <TodosProvider>
        <TodoList />
      </TodosProvider>
      <MadeBy link="https://github.com/JCarlosLucio/react-todo-list" />
    </React.Fragment>
  );
}

export default App;
