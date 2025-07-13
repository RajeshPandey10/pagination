import React, { useState, useEffect } from "react";

const WeatherIthari = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const API_KEY = "db81597376614454bf1153221251207"; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Ithari&aqi=no`
        );
        if (!res.ok) throw Error("Failed to fetch weather");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Weather in {weather.location.name}, {weather.location.country}</h2>
      <p><strong>Temperature:</strong> {weather.current.temp_c}°C</p>
      <p><strong>Condition:</strong> {weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt="icon" />
      <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
      <p><strong>Wind:</strong> {weather.current.wind_kph} km/h</p>
    </div>
  );
};

export default WeatherIthari;