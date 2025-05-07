import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../todos/todosSlice';
import Todos from '../todos/Todos';

function TodosPage() {
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      setError('Todo cannot be empty');
      return;
    }
    setError('');
    dispatch(addTodo({
      id: Date.now(),
      text: newTodo,
      completed: false,
    }));
    setNewTodo('');
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Todos todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default TodosPage;
