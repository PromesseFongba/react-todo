import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Buy groceries" },
    { id: 3, title: "Read a book" },
  ];
  
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
