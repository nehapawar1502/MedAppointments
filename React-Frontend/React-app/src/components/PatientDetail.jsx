import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import axios from '../axiosConfig';  

const PatientDetail = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        axios.get(`/patients/${id}`)
            .then(response => {
                setPatient(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the patient!", error);
            });
    }, [id]);

    if (!patient) return <div>Loading...</div>;

    return (
        <div className="patient-detail-container">
            <h2>{patient.name}</h2>
            <p>Mobile No: {patient.mobile_no}</p>
            <p>Email: {patient.email}</p>
            <h3>Appointments</h3>
            <ul className="appointment-list">
                {patient.appointments.map(appointment => (
                    <li key={appointment.id} className="appointment-item">
                        {appointment.datetime} - {appointment.notes}
                        <br />
                        <a href={appointment.payment_link} target="_blank" rel="noopener noreferrer">Payment Link</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientDetail;
