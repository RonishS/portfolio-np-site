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
// In development, we'll run valid separate servers, but this is good for the "end result"
app.use(express.static(path.join(__dirname, 'client/dist')));

// API Routes
app.post('/api/request-domain', (req, res) => {
    const { name, email, domain, message } = req.body;
    console.log('--- New Domain Request ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Domain:', domain);
    console.log('Message:', message);
    console.log('--------------------------');

    // Here you would typically save to DB or send email
    res.json({ success: true, message: 'Request received successfully!' });
});

// Catch-all handler to return React's main file for any other request
app.get(/(.*)/, (req, res) => {
    // If client build exists, serve it. Otherwise tell user to run client dev server.
    const indexPath = path.join(__dirname, 'client/dist/index.html');
    // We won't check existence here, just assume standard deployment structure
    // For dev mode, this route might not be hit if using Vite proxy, but good to have.
    res.sendFile(indexPath, (err) => {
        if (err) {
            res.status(500).send("Server is running. For frontend, please ensure 'npm run build' is run in client/ directory or run the Vite dev server.");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
