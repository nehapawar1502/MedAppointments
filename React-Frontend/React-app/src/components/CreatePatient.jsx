import React, { useState } from 'react';
// import axios from 'axios';
import axios from '../axiosConfig';  

const CreatePatient = () => {
    const [name, setName] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/patients', { name, mobile_no: mobileNo, email })
            .then(response => {
                alert('Patient created successfully!');
                setName('');
                setMobileNo('');
                setEmail('');
            })
            .catch(error => {
                console.error("There was an error creating the patient!", error);
            });
    };

    return (
        <div className="create-patient-container">
            <h2>Create Patient</h2>
            <form onSubmit={handleSubmit} className="create-patient-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Mobile No:</label>
                    <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit" className="submit-button">Create</button>
            </form>
        </div>
    );
};

export default CreatePatient;
