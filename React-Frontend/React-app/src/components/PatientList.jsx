import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axios from '../axiosConfig';  
const PatientList = () => {
    const [patients, setPatients] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get('/patients')
            .then(response => {
                setPatients(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the patients!", error);
            });
    }, []);

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="patient-list-container">
            <h2>Patient List</h2>
            <input 
                type="text" 
                placeholder="Search by name" 
                value={search}
                onChange={e => setSearch(e.target.value)} 
                className="search-input"
            />
            <ul className="patient-list">
                {filteredPatients.map(patient => (
                    <li key={patient.id} className="patient-item">
                        <a href={`/patients/${patient.id}`}>{patient.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;
