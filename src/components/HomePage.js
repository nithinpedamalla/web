// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HomePage.css'; // Import CSS file

const HomePage = () => {
  return (
    <div className="home-page"> {/* Apply home-page class */}
      <nav className="navbar">
        <ul>
          <li className="lipage">
            <Link to="/signup">Signup</Link> {/* Link to SignupPage */}
          </li>
          <span></span>
          <li>
            <Link to="/login">Login</Link> {/* Link to LoginPage */}
          </li>
        </ul>
      </nav>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page</p>
    </div>
  );
};

export default HomePage;
