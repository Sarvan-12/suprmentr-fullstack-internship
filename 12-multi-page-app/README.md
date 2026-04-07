# 12 — Multi-Page App

**Assignment Date:** 11/03/2026
**Assignment:** Convert your React app into a multi-page SPA using React Router.

---

## Live Demo

🔗 [View Live](https://sarvan-12.github.io/suprmentr-fullstack-internship/12-multi-page-app/)

---

## What I Built

A multi-page React SPA using React Router with three pages — Home, Tasks, and About. A persistent navbar lets users navigate between pages without any full page reload. The Tasks page has full add/delete/toggle functionality carried over from the previous assignment.

---

## Features

- Three pages: Home, Tasks, About
- Navbar with active link highlight
- Client-side routing with no full page reloads
- "Go to Tasks" button on Home using useNavigate
- URL updates on navigation (/, /tasks, /about)
- Task list with add, delete, and toggle done

---

## Technologies Used

- React
- React Router DOM
- useState

---

## Project Structure

```
12-multi-page-app/
│
├── public/
├── src/
│   ├── pages/
│   │   ├── Home.js       # Home page with navigate button
│   │   ├── Tasks.js      # Task list page
│   │   └── About.js      # About page
│   ├── App.js            # Router setup, Navbar
│   ├── App.css           # Styling
│   └── index.js          # Entry point
├── package.json
└── README.md
```

---

## What I Learned

- How React Router enables client-side navigation in a SPA
- How to set up BrowserRouter, Routes, and Route
- How to use Link for navigation and useNavigate for programmatic routing
- How to highlight the active nav link using useLocation

---

## Author

**Sarvan D Suvarna** — Part of MERN Stack Internship @ SuprMentr Technologies