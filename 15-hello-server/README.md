# 15 — Hello Server

Assignment Date: 23/03/2026
Assignment: Create a Node.js server with basic routing.

---

## What I Built

A basic Node.js server using the built-in http module. The server handles multiple routes and returns different text responses based on the requested URL.

---

## Features

Basic routing using req.url
Home route (/) → Welcome message
About route (/about) → About message
Contact route (/contact) → Contact message
Handles unknown routes with 404 response

---

## Technologies Used

Node.js
HTTP module

---

## Project Structure

15-hello-server/
│
└── server.js

---

## What I Learned

How to create a server using http.createServer()
Understanding request and response cycle
How to handle routing using req.url
How to send status codes and responses using res.writeHead() and res.end()
Basics of backend development

---

## 🛠️ How to Run Locally

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Sarvan-12/suprmentr-fullstack-internship.git
   ```
2. **Navigate to this folder**:
   ```bash
   cd 15-hello-server
   ```
3. **Start the server**:
   ```bash
   node server.js
   ```
4. **Access the server**:
   - Open your browser and go to `http://localhost:3000`.
   - Try navigating to `/`, `/about`, or `/contact` to see different responses.

---

## Author

Sarvan D Suvarna — Part of MERN Stack Internship @ SuprMentr Technologies
