import React from 'react';
import WeatherComponent from './WeatherComponent'; // Import the WeatherComponent

const HomePage = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to the National Parks Explorer</h1>
            <p>Discover and plan your next adventure at one of the beautiful national parks.</p>
            
            {/* Add the WeatherComponent here to show weather information */}
            <WeatherComponent />

            {/* Other homepage content */}
            <div style={{ marginTop: '30px' }}>
                <h2>Featured Parks</h2>
                <p>Explore our list of top-rated parks and start planning your visit!</p>
                {/* Placeholder for other homepage sections, images, or links */}
            </div>
        </div>
    );
};

export default HomePage;
