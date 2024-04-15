import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [editedPatient, setEditedPatient] = useState({ name: '', operations: '' });

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/patients');
        setPatients(response.data.patients);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleEdit = (patient) => {
    setEditedPatient(patient);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/auth/patients/${editedPatient.name}`, {
        name: editedPatient.name, // Include the name field to identify the patient
        operations: editedPatient.operations,
      });
      console.log('Patient updated:', response.data);
      // Update the patients list after successful update
      setPatients(patients.map(p => p.name === response.data.patient.name ? response.data.patient : p));
      // Reset editedPatient state
      setEditedPatient({ name: '', operations: '' });
    } catch (error) {
      console.error('Error updating patient:', error);

      
      
    }
  };

  return (
    <div>
      <h2>Patients List</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            <strong>Name:</strong> {patient.name}, <strong>Operations:</strong> {patient.operations}
            <button onClick={() => handleEdit(patient)}>Edit</button>
          </li>
        ))}
      </ul>

      {/* Form for editing patient details */}
      {editedPatient.name && (
        <div>
          <h3>Edit Patient</h3>
          <label>Name:</label>
          <input
            type="text"
            value={editedPatient.name}
            onChange={(e) => setEditedPatient({ ...editedPatient, name: e.target.value })}
            required
          />
          <label>Operations:</label>
          <input
            type="number"
            value={editedPatient.operations}
            onChange={(e) => setEditedPatient({ ...editedPatient, operations: e.target.value })}
            required
          />
          <button onClick={handleSubmit}>Update</button>
        </div>
      )}
    </div>
  );
};

export default PatientsList;
