const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from React app (production simulation)
app.use(express.static(path.join(__dirname, 'client/dist')));

// API Routes
app.get('/api/status', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // In a real app, you'd send an email or save to DB here.
    console.log('Contact Form Submitted:', { name, email, message });
    res.json({ success: true, message: 'Message received!' });
});

// Catch-all handler to return React's main file for any other request
app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'client/dist/index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            res.status(500).send("Server is running. For frontend, please ensure 'npm run build' is run in client/ directory.");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
