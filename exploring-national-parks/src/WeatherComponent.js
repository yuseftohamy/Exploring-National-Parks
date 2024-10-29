// WeatherComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
    const [weather, setWeather] = useState({ temp: '', description: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        fetchWeather();
    }, []);

    const fetchWeather = async () => {
        const apiKey = "ded3a8a0a6f6006a0c2f9a1ecb0e5193"; // Replace with your actual API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=${apiKey}&units=imperial`;

        try {
            const response = await axios.get(apiUrl);
            if (response.status === 200) {
                const weatherData = response.data;
                setWeather({
                    temp: weatherData.main.temp,
                    description: weatherData.weather[0].description,
                });
            } else {
                setError('Error fetching weather data');
            }
        } catch (error) {
            setError('API request failed');
        }
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '8px', margin: '20px auto', width: '80%' }}>
            {error ? (
                <div style={{ color: 'red' }}>{error}</div>
            ) : (
                <div>
                    <h3>Current Weather in Philadelphia</h3>
                    <p>Temperature: {weather.temp}°F</p>
                    <p>Description: {weather.description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;
