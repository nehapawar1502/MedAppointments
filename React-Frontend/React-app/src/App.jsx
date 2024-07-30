// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientList from './components/PatientList';
import PatientDetail from './components/PatientDetail';
import CreatePatient from './components/CreatePatient';
import CreateAppointment from './components/CreateAppointment';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<PatientList />} />
                    <Route path="/patients/:id" element={<PatientDetail />} />
                    <Route path="/create-patient" element={<CreatePatient />} />
                    <Route path="/patients/:id/create-appointment" element={<CreateAppointment />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
