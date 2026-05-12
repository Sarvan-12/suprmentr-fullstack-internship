
# 17 — Task API

**Assignment Date:** 27/03/2026
**Assignment:** Create CRUD APIs for a task manager and test using API client.

---

## What I Built

A basic Express.js backend API for managing tasks. Implemented full CRUD operations (Create, Read, Update, Delete) using RESTful routes and stored data in an in-memory array (no database).

---

## Features

* REST API for Task Management
* CRUD operations (Create, Read, Update, Delete)
* Route parameters handling using `req.params`
* JSON request body handling using `express.json()`
* Auto-incrementing ID for tasks
* Proper error handling for invalid IDs and missing data

---

## Technologies Used

* Node.js
* Express.js

---

## 🛠️ How to Run Locally

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Sarvan-12/suprmentr-fullstack-internship.git
   ```
2. **Navigate to this folder**:
   ```bash
   cd 17-task-api
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the server**:
   ```bash
   node index.js
   ```
5. **Access the API**:
   - The server runs on `http://localhost:3000`.
   - You can test the CRUD routes like `/tasks` using a browser or an API tester like Postman.

---

## Project Structure

```
17-task-api/
│
├── index.js        # Server setup and all task routes
├── package.json
└── README.md
```

---

## What I Learned

* How to build a complete CRUD API using Express
* How to handle different HTTP methods (GET, POST, PUT, DELETE)
* How to manage and update data using an in-memory array
* How to send proper status codes (200, 201, 404, 400)
* How to test APIs using tools like Thunder Client / Postman

---

## Author

**Sarvan D Suvarna** — Part of MERN Stack Internship @ SuprMentr Technologies

