# 09 — Weather Dashboard

**Assignment Date:** 07/03/2026
**Assignment:** Fetch weather data from a public API and display loading/error states.

---

## Live Demo

🔗 [View Live](https://sarvan-12.github.io/suprmentr-fullstack-internship/09-weather-dashboard/)

---

## What I Built

A React weather app where users search for any city and get real-time weather data — temperature, humidity, wind speed, and feels like. Built with Open-Meteo API using a two-step fetch: first geocoding to convert city name to coordinates, then fetching weather using those coordinates.

---

## Features

- City search with Enter key support
- Two-step API fetch — geocoding + weather data
- Loading state with spinner while fetching
- Error state for invalid city names
- Weather display with emoji based on condition
- Shows temperature, humidity, wind speed, and feels like
- Uses Open-Meteo API — no API key required

---

## Technologies Used

- React
- useState, useEffect
- Open-Meteo Geocoding API
- Open-Meteo Weather API

---

## Project Structure

```
09-weather-dashboard/
│
├── public/
├── src/
│   ├── App.js        # Main component — search, fetch, state logic
│   ├── App.css       # Styling
│   └── index.js      # Entry point
├── package.json
└── README.md
```

---

## What I Learned

- How to fetch data from a public API in React
- How to handle loading, error, and success states using useState
- How to chain two API calls (geocoding → weather)
- How to conditionally render different UI based on state

---

## Author

**Sarvan D Suvarna** — Part of MERN Stack Internship @ SuprMentr Technologies
