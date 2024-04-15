// LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'; // Import CSS file
//import { useHistory } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const history = useHistory();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend using Axios
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      if (response.status === 200 || response.status === 201) {
        // Login successful, redirect to home page
        navigate('/products',{ state: { email: email } })
        
      } else {
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="on" 
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
          autoComplete="on"
        />
        
        <button type="submit">Login</button>
        
      </form>
    </div>
  );
};

export default LoginPage;
