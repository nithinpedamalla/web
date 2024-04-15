// SignUpPage.js
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './SignUpPage.css'; // Import CSS file
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      // Send sign-up request to backend using Axios
      const response = await axios.post('http://localhost:5000/api/auth/signup', { email, password });

      if (response.status === 200 || response.status === 201) {
        // Sign-up successful, redirect to login page
        navigate("/login")
        //window.location.href = '/login'; // Use window.location.href for redirection
      } else {
        console.error('Sign-up failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up Page</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="on" // Autofill set to email
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="on" // Autofill set to password
        />
        <button className='btn-id' type="submit">Sign Up</button>
        <Link to ="/login">
        <button >Already has Account</button>
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
