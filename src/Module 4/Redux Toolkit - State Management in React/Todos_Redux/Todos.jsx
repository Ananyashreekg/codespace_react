import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './todosSlice';

const Todos = () => {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim().length < 3) {
      alert('Task must be at least 3 characters long.');
      return;
    }
    dispatch(addTodo(task));
    setTask('');
  };

  return (
    <div>
      <div style={styles.inputWrapper}>
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addBtn}>Add</button>
      </div>
      <ul style={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.todoItem}>
            <span
              style={{
                ...styles.todoText,
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? 'green' : 'black'
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))} style={styles.deleteBtn}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  inputWrapper: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  addBtn: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  todoList: {
    listStyle: 'none',
    padding: 0
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    backgroundColor: '#fff',
    border: '1px solid #e0e0e0'
  },
  todoText: {
    cursor: 'pointer',
    fontSize: '16px'
  },
  deleteBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#dc3545'
  }
};

export default Todos;
