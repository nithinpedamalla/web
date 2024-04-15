// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductsPage'
import PatientsList from './components/PatientsList';

function App() {
  return (
    
  
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/patients" element={<PatientsList/>}/>
        </Routes>
     
   
  );
}

export default App;
