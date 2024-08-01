const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data'); // Ensure this file contains the necessary symptom and treatment data

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Doctor information
const doctorInfo = {
    name: 'Caleb Yeboah',
    phone: '0599509899',
    email: 'calebkwabenayeboahbaah@gmail.com'
};

app.post('/api/diagnose', (req, res) => {
    try {
        const { symptoms } = req.body;

        if (!symptoms || typeof symptoms !== 'string') {
            return res.status(400).json({ error: 'Symptoms must be a comma-separated string.' });
        }

        // Split and normalize symptoms
        const symptomList = symptoms.split(',').map(symptom => symptom.trim().toLowerCase());

        // Initialize result object
        const result = symptomList.reduce((acc, symptom) => {
            let foundMatch = false;
            data.forEach(entry => {
                if (entry.symptoms && entry.symptoms.some(s => s.toLowerCase() === symptom)) {
                    acc.illnesses = [...new Set([...acc.illnesses, ...entry.illnesses])];
                    acc.drugs = [...new Set([...acc.drugs, ...entry.drugs])];
                    foundMatch = true;
                }
            });

            if (!foundMatch) {
                console.warn(`No entry found for symptom: ${symptom}`);
            }

            return acc;
        }, { illnesses: [], drugs: [] });

        // Include doctor information in the response
        res.json({
            ...result,
            doctor: doctorInfo
        });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
