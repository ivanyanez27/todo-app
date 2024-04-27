import './App.css';
import React from 'react';
import TodoList from './components/TodoList'
import TodoCalendar from './components/TodoCalendar';

function App() {
  return (
    <div className="App">
      <div className='column'>
        <h2>Section 1</h2>
        <TodoCalendar />
      </div>
      <div className='column'>
        <h2>Section 2</h2>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
