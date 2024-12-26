const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

const API_KEY = process.env.API_KEY;
const SECRET = process.env.SECRET;

app.get('/get-token', (req, res) => {
    const options = {
        expiresIn: '120m',
        algorithm: 'HS256'
    };
    const payload = {
        apikey: API_KEY,
        permissions: ['allow_join'], // `ask_join` || `allow_mod`
        version: 2
    };

    // Generate the token
    try {
        const token = jwt.sign(payload, SECRET, options);
        res.status(200).json({ token });
    } catch (err) {
        console.error('Error generating token:', err);
        res.status(500).json({ error: 'Failed to generate token' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});