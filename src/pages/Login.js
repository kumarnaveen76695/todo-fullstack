import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import api from '../services/api';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();  // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/api/auth/login', formData);
      localStorage.setItem('token', data.token);
      navigate('/Todo');  // Use navigate to redirect to the Todo page
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
