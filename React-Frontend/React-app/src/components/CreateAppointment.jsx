import React, { useState } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import axios from '../axiosConfig';   
const CreateAppointment = () => {
    const { id } = useParams();
    const [datetime, setDatetime] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`/patients/${id}/appointments`, { datetime, notes })
            .then(response => {
                alert('Appointment created successfully!');
                setDatetime('');
                setNotes('');
            })
            .catch(error => {
                console.error("There was an error creating the appointment!", error);
            });
    };

    return (
        <div className="create-appointment-container">
            <h2>Create Appointment</h2>
            <form onSubmit={handleSubmit} className="create-appointment-form">
                <div className="form-group">
                    <label>Date and Time:</label>
                    <input type="datetime-local" value={datetime} onChange={(e) => setDatetime(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Notes:</label>
                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)} required></textarea>
                </div>
                <button type="submit" className="submit-button">Create</button>
            </form>
        </div>
    );
};

export default CreateAppointment;
