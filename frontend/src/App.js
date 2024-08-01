// src/App.js
import React from 'react';
import MedicalForm from './components/MedicalForm';
import './App.css'; // Ensure you have a CSS file for styling

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="doctorWeb.jpeg" alt="DoctorWeb Logo" className="App-logo" />
                <h1>DoctorWeb</h1>
            </header>
            <main>
                <MedicalForm />
            </main>
        </div>
    );
}

export default App;
