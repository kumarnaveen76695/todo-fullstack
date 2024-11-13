import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const { data } = await api.get('/api/todos');
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos", error);
    }
  };

  const addTodo = async () => {
    try {
      const { data } = await api.post('/api/todos', { title: newTodo, status: 'pending' });
      setTodos([...todos, data]);
      setNewTodo('');
    } catch (error) {
      console.error("Error adding todo", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await api.delete(`/api/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo", error);
    }
  };

  return (
    <div>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.status}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
