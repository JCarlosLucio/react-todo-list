import React from 'react';
import TodoList from './TodoList';
import MadeBy from './MadeBy';

function App() {
  return (
    <React.Fragment>
      <TodoList />
      <MadeBy link="https://github.com/JCarlosLucio/react-todo-list" />
    </React.Fragment>
  );
}

export default App;
