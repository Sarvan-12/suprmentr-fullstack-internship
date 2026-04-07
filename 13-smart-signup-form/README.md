# 13 — Smart Signup Form

**Assignment Date:** 12/03/2026
**Assignment:** Build a signup form with validations (email, password strength).

---

## Live Demo

🔗 [View Live](https://sarvan-12.github.io/suprmentr-fullstack-internship/13-smart-signup-form/)

---

## What I Built

A React signup form with real-time field validation — checks name, email format, password strength (uppercase + number + length), role selection, and terms checkbox. Shows a success screen with the user's name and role on valid submission.

---

## Features

- Validates Full Name, Email, Password, Role, and Terms checkbox
- Real-time error messages as user types
- Password strength indicator (Weak / Medium / Strong) with color
- Success screen shown after valid submission
- Prevents submission if any field is invalid
- Clean light-themed UI

---

## Technologies Used

- React
- useState
- Regex (email format, password strength)

---

## Project Structure

```
13-smart-signup-form/
│
├── public/
├── src/
│   ├── App.js        # Form state, validation logic, success screen
│   ├── App.css       # Form styling, error and success states
│   └── index.js      # Entry point
├── package.json
└── README.md
```

---

## What I Learned

- How to manage multiple form fields with a single state object in React
- How to validate inputs in real-time using onChange
- How to use regex for email format and password strength checks
- How to conditionally render a success screen after form submission

---

## Author

**Sarvan D Suvarna** — Part of MERN Stack Internship @ SuprMentr Technologies
