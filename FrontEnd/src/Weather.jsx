import { useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Import your CSS file for styling

const Weather = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const search = async () => {
        try {
            const url = `https://wttr.in/${encodeURIComponent(city)},${encodeURIComponent(country)}?format=%C+%t+%w`;
            const response = await axios.get(url);
            const weatherData = response.data;

            // Determine weather condition based on weatherData (example logic)
            let weatherCondition = '';
            if (weatherData.includes('Sunny')) {
                weatherCondition = 'sunny';
            } else if (weatherData.includes('Rain') || weatherData.includes('Drizzle')) {
                weatherCondition = 'rainy';
            } else {
                weatherCondition = 'default'; // Fallback condition
            }

            setWeather(weatherData);
            setError('');
            document.body.className = weatherCondition; // Set background based on weather condition

        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeather(null);
            setError('Error fetching weather data. Please check your input.');
        }
    };

    return (
        <div style={{ backgroundImage: `url('./weather.jpg')`
            }}>
            
        <div className="weather-container">
            <input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} /> &nbsp;
            <input type="text" placeholder="Enter country" value={country} onChange={(e) => setCountry(e.target.value)} />
            <br /><br />
            <button onClick={search}>Search</button>
            {error && <p className="error-message">{error}</p>}
            {weather && (
                <div>
                    <h2>{`${city}, ${country}`}</h2>
                    <p>{weather}</p>
                </div>
            )}
        </div>
        </div>

    );
};

export default Weather;
