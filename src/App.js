import React from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
      <div className="App-link">
        <a href="https://github.com/JCarlosLucio/react-todo-list">
          Made by Lucio <i className="fab fa-github-alt" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default App;
