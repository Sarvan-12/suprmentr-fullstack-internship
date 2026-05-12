# 10 — Mood Tracker

**Assignment Date:** 09/03/2026
**Assignment:** Create a React app where users select their mood and it updates UI using state.

---

## Live Demo

🔗 [View Live](https://sarvan-12.github.io/suprmentr-fullstack-internship/10-mood-tracker/)

---

## What I Built

A React mood tracker where users click on a mood (Happy, Sad, Angry, Anxious, Bored, Excited) and the UI updates instantly — background tint changes, the selected button glows, and a personalized message appears based on the chosen mood.

---

## Features

- 6 mood options with emoji buttons
- Background gradient changes based on selected mood
- Active mood button gets a glowing border highlight
- Personalized message shown for each mood
- Smooth transitions on mood change
- No API — pure state-driven UI

---

## Technologies Used

- React
- useState
- CSS transitions

---

## 🛠️ How to Run Locally

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Sarvan-12/suprmentr-fullstack-internship.git
   ```
2. **Navigate to this folder**:
   ```bash
   cd 10-mood-tracker
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```
5. **Open the project**:
   - The app should automatically open in your browser at `http://localhost:3000`.

---

## Project Structure

```
10-mood-tracker/
│
├── public/
├── src/
│   ├── App.js        # Mood data, state logic, conditional rendering
│   ├── App.css       # Styling, transitions, mood button styles
│   └── index.js      # Entry point
├── package.json
└── README.md
```

---

## What I Learned

- How to drive UI changes entirely through state
- How to apply dynamic inline styles based on state values
- How to use conditional rendering to show/hide elements
- How arrays of objects can cleanly structure UI data

---

## Author

**Sarvan D Suvarna** — Part of MERN Stack Internship @ SuprMentr Technologies
