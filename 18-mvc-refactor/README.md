
# 18 — MVC Refactor

**Assignment Date:** 28/03/2026
**Assignment:** Refactor the Task API into MVC structure.

---

## What I Built

Refactored the existing Task API into a structured Model-View-Controller (MVC) architecture. This involved separating the application logic into specialized layers for data management (Models), request handling (Controllers), and URL routing (Routes), while preserving the original CRUD functionality.

---

## Features

* Clean MVC-based folder structure
* Clear separation of concerns (Model, Controller, Routes)
* Modular routing using `express.Router()`
* Organized request handling logic
* In-memory data management in the model layer
* Full CRUD support (GET, POST, PUT, DELETE)

---

## Technologies Used

* Node.js
* Express.js

---

## Project Structure

```
18-mvc-refactor/
│
├── controllers/
│   └── taskController.js   # Request handling logic
├── models/
│   └── taskModel.js        # Data management and logic
├── routes/
│   └── taskRoutes.js       # URL to Controller mapping
├── server.js               # Entry point - App setup
├── package.json
└── README.md
```

---

## API Endpoints

**Base URL:** `http://localhost:3000/tasks`

* **GET** `/` — Retrieve all tasks
* **GET** `/:id` — Retrieve a specific task by ID
* **POST** `/` — Create a new task
* **PUT** `/:id` — Update an existing task
* **DELETE** `/:id` — Remove a task

---

## What I Learned

* How to structure backend applications using the MVC pattern
* The roles and responsibilities of Models, Controllers, and Routes
* How to modularize routing using `express.Router()`
* Improving code scalability and maintainability through organization
* Handling JSON responses in an API without a traditional View layer

---

## Author

**Sarvan D Suvarna** — Part of MERN Stack Internship @ SuprMentr Technologies
