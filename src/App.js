import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <div>
        <a href="https://github.com/JCarlosLucio/todo-list">
          Made by Lucio <i className="fab fa-github-alt" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default App;
