import './App.css'
import React from 'react';
import TodoList from './TodoList1';
import AddTodoForm from './AddTodoForm1';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;

