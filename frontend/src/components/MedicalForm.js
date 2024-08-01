import React, { useState } from 'react';
import axios from 'axios';
import './MedicalForm.css';

const MedicalForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        height: '',
        symptoms: ''
    });
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [doctorInfo, setDoctorInfo] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:5000/api/diagnose', { symptoms: formData.symptoms });
            console.log('API Response:', response.data); // Debug: Check API response
            setResults(response.data);
            setDoctorInfo(response.data.doctor || null);
        } catch (error) {
            setError('Error submitting form. Please try again.');
            console.error('Error submitting form', error);
        }
        setIsLoading(false);
    };

    return (
        <div className="container">
            <h1 className="title">Talk to your Web Doctor</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="height">Height (cm):</label>
                    <input
                        type="number"
                        id="height"
                        name="height"
                        placeholder="Enter your height in cm"
                        value={formData.height}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="symptoms">Symptoms:</label>
                    <textarea
                        id="symptoms"
                        name="symptoms"
                        placeholder="Enter your symptoms (comma-separated)"
                        value={formData.symptoms}
                        onChange={handleChange}
                        required
                        className="textarea"
                    />
                </div>
                <button
                    type="submit"
                    className={`submit-button ${isLoading ? 'loading' : ''}`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}
            {results && (
                <div className="results">
                    <h2 className="results-title">Results:</h2>
                    <div className="results-group">
                        <h3 className="results-subtitle">Possible Illnesses:</h3>
                        <ul className="results-list">
                            {results.illnesses && results.illnesses.length > 0 ? (
                                results.illnesses.map((illness, index) => (
                                    <li key={index} className="results-item">{illness}</li>
                                ))
                            ) : (
                                <li>No illnesses found.</li>
                            )}
                        </ul>
                    </div>
                    <div className="results-group">
                        <h3 className="results-subtitle">Recommended Drugs:</h3>
                        <ul className="results-list">
                            {results.drugs && results.drugs.length > 0 ? (
                                results.drugs.map((drug, index) => (
                                    <li key={index} className="results-item">{drug}</li>
                                ))
                            ) : (
                                <li>No drugs recommended.</li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
            {doctorInfo && (
                <div className="doctor-card">
                    <h3 className="doctor-card-title">Contact Your Doctor for further assistance:</h3>
                    <p><strong>Name: </strong>{doctorInfo.name}</p>
                    <p><strong>Phone: </strong>{doctorInfo.phone}</p>
                    <p><strong>Email: </strong>{doctorInfo.email}</p>
                    <button
                        className="connect-button"
                        onClick={() => window.location.href = `mailto:${doctorInfo.email}`}
                    >
                        Email Doctor
                    </button>
                </div>
            )}
        </div>
    );
};

export default MedicalForm;
