import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'http';
import React from 'react';
import ReactDOM from 'react-dom';
import RTSPViewer from './components/RTSPViewer';
import Banner from './components/Banner';
import NewsScroll from './components/NewsScroll';
import WeatherDisplay from './components/WeatherDisplay';
import './styles/main.css';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);
const port = 3000;

// Serve static files
app.use(express.static(join(__dirname, 'public')));

// Main page route
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

const App = () => {
    return (
        <div className="app">
            <Banner />
            <RTSPViewer />
            <NewsScroll />
            <WeatherDisplay />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});