# 11 — Dynamic List App

**Assignment Date:** 10/03/2026
**Assignment:** Build a task list with add/delete functionality using hooks.

---

## Live Demo

🔗 [View Live](https://sarvan-12.github.io/suprmentr-fullstack-internship/11-dynamic-list-app/)

---

## What I Built

A React task list app where users can add tasks, mark them as done by clicking on them, and delete them. A counter at the bottom tracks how many tasks are completed out of the total.

---

## Features

- Add tasks via input field or Enter key
- Click task text to toggle done/strike-through
- Delete individual tasks with ✕ button
- Completed count shown at the bottom
- Empty state message when no tasks exist
- Prevents adding empty tasks

---

## Technologies Used

- React
- useState

---

## Project Structure

```
11-dynamic-list-app/
│
├── public/
├── src/
│   ├── App.js        # Task state, add/delete/toggle logic
│   ├── App.css       # Styling
│   └── index.js      # Entry point
├── package.json
└── README.md
```

---

## What I Learned

- How to store and update an array in React state
- How to use spread operator to add items to state
- How to use filter() to delete items from state
- How to use map() to toggle a specific item in an array

---

## Author

**Sarvan D Suvarna** — Part of MERN Stack Internship @ SuprMentr Technologies
