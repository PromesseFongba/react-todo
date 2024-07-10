import './App.css'
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = useState('');

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <TodoList />
      <p>{newTodo}</p>
    </div>
  );
}

export default App;

