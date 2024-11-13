import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/api/auth/signup', formData);
      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('api/todos'); 
      }
    } catch (error) {
      console.error("Signup Error", error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
