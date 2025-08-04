import React from 'react';
import ReactDOM from 'react-dom';
import RTSPViewer from './components/RTSPViewer';
import Banner from './components/Banner';
import NewsScroll from './components/NewsScroll';
import WeatherDisplay from './components/WeatherDisplay';
import './styles/main.css';

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