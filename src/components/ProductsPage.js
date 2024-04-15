import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const [name, setName] = useState('');
  const [operations, setOperations] = useState('');
  const navigate = useNavigate();

  const handleName = async (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/products', {
        name,
        operations,
      });
      console.log('Patient created:', response.data);
      if (response.status === 200 || response.status === 201) {
        // Patient added successfully, redirect to login
        navigate('/login');
      } else {
        console.error('Patient creation failed:', response.data.message);
      }
      // Reset form fields after successful submission
      setName('');
      setOperations('');
    } catch (error) {
      console.error('Error creating patient:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/auth/products/${name}`);
      console.log('Patient deleted:', response.data);
      // Implement logic to update UI after deleting the patient
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  return (
    <div>
      <h2>Add New Patient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleName}
            required
          />
        </div>
        <div>
          <label>Operations:</label>
          <input
            type="number"
            value={operations}
            onChange={(e) => setOperations(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Patient</button>
      </form>

      {/* Add button to delete patient */}
      <button onClick={() => handleDelete()}>Delete Patient</button>
    </div>
  );
};

export default ProductsPage;
