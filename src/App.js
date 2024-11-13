import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Signup from './pages/Signup';
import Login from './pages/Login';
import Todo from './pages/Todo';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        
      </Routes>
    </Router>
  );
}

export default App;
