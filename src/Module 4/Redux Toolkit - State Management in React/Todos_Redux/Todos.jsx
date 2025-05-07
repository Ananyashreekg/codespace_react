import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todosSlice';
import './Todos.css';

const Todos = () => {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
