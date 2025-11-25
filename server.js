const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (index.html, styles.css, images, etc.) from the project root
app.use(express.static(path.join(__dirname)));

// Send index.html for root (helps when opening http://localhost:3000/)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Default coordinates for West Chester, PA
const DEFAULT_LAT = 39.9607;
const DEFAULT_LON = -75.6055;

// Simple mapping of Open-Meteo weather codes to text (partial)
const weatherCodeMap = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  71: 'Light snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  80: 'Rain showers',
  81: 'Heavy rain showers',
  95: 'Thunderstorm'
};

app.get('/api/weather', async (req, res) => {
  try {
    const lat = parseFloat(req.query.lat) || DEFAULT_LAT;
    const lon = parseFloat(req.query.lon) || DEFAULT_LON;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=America%2FNew_York`;
    const response = await axios.get(url);
    const data = response.data;
    const cw = data.current_weather || {};

    const payload = {
      temperature: cw.temperature, // °C
      windspeed: cw.windspeed,
      winddirection: cw.winddirection,
      weathercode: cw.weathercode,
      description: weatherCodeMap[cw.weathercode] || 'Unknown',
      timezone: data.timezone || 'America/New_York',
      fetchedAt: new Date().toISOString(),
      requestedLat: lat,
      requestedLon: lon
    };

    res.json(payload);
  } catch (err) {
    console.error('weather fetch error', err && err.toString());
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Weather backend running on port ${port}`);
});
