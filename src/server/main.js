import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);
const port = 3000;

// Add logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
});

// Serve static files
app.use(express.static(join(__dirname, '../../dist')));

// Main page route
app.get('/', (req, res) => {
    console.log('Serving index.html');
    res.sendFile(join(__dirname, '../../dist/index.html'));
});

// Error handling
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).send('Server error');
});

// Listen on all network interfaces
server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Server directory: ${join(__dirname, '../../dist')}`);
});