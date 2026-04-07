import { useState } from "react";
import "./App.css";

// weathercode → human readable description
const getWeatherDescription = (code) => {
  const codes = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Icy Fog",
    51: "Light Drizzle",
    53: "Moderate Drizzle",
    55: "Heavy Drizzle",
    61: "Slight Rain",
    63: "Moderate Rain",
    65: "Heavy Rain",
    71: "Slight Snow",
    73: "Moderate Snow",
    75: "Heavy Snow",
    80: "Slight Showers",
    81: "Moderate Showers",
    82: "Heavy Showers",
    95: "Thunderstorm",
    99: "Thunderstorm with Hail",
  };
  return codes[code] || "Unknown";
};

const getWeatherEmoji = (code) => {
  if (code === 0 || code === 1) return "☀️";
  if (code === 2 || code === 3) return "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if (code >= 51 && code <= 55) return "🌦️";
  if (code >= 61 && code <= 65) return "🌧️";
  if (code >= 71 && code <= 75) return "❄️";
  if (code >= 80 && code <= 82) return "🌩️";
  if (code >= 95) return "⛈️";
  return "🌡️";
};

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      // Step 1 — Get coordinates from city name
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found. Try another name.");
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Step 2 — Get weather using coordinates
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m,apparent_temperature&timezone=auto`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        city: name,
        country: country,
        temp: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
        code: weatherData.current_weather.weathercode,
        humidity: weatherData.hourly.relative_humidity_2m[0],
        feelsLike: weatherData.hourly.apparent_temperature[0],
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  return (
    <div className="app">
      <h1>🌤️ Weather Dashboard</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="state-box">
          <div className="spinner"></div>
          <p>Fetching weather...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="state-box error-box">
          <p>❌ {error}</p>
        </div>
      )}

      {/* Success State */}
      {weather && (
        <div className="weather-card">
          <h2>{weather.city}, {weather.country}</h2>
          <div className="emoji">{getWeatherEmoji(weather.code)}</div>
          <p className="temp">{weather.temp}°C</p>
          <p className="desc">{getWeatherDescription(weather.code)}</p>
          <div className="details">
            <div className="detail-item">
              <span className="label">💧 Humidity</span>
              <span>{weather.humidity}%</span>
            </div>
            <div className="detail-item">
              <span className="label">🌬️ Wind</span>
              <span>{weather.windspeed} km/h</span>
            </div>
            <div className="detail-item">
              <span className="label">🌡️ Feels Like</span>
              <span>{weather.feelsLike}°C</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;