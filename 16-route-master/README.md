# 16 — Route Master

**Assignment Date:** 26/03/2026
**Assignment:** Build Express routes for a bookstore (books, authors).

---

## What I Built

A basic Express.js backend API for a bookstore that handles books and authors using RESTful routes. Implemented routing logic using Express Router and handled requests using in-memory data (no database).

---

## Features

* REST API for Books and Authors
* CRUD operations (Create, Read, Update, Delete)
* Modular routing using Express Router
* Route parameters handling using `req.params`
* JSON request body handling using `express.json()`
* Proper error handling for invalid IDs

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
   cd 16-route-master
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
   - You can test the routes like `/books` or `/authors` using a browser or an API tester like Postman.

---

## Project Structure

```
16-route-master/
│
├── routes/
│   ├── books.js      # All book-related routes
│   └── authors.js    # All author-related routes
├── index.js          # Server setup and route connection
├── package.json
└── README.md
```

---

## What I Learned

* How Express handles routing using methods like GET, POST, PUT, DELETE
* How to structure routes using Express Router for better code organization
* How to work with route parameters (`req.params`)
* How to handle request body data using middleware (`express.json()`)
* How to build a basic REST API without using a database

---

## Author

**Sarvan D Suvarna** — Part of MERN Stack Internship @ SuprMentr Technologies
