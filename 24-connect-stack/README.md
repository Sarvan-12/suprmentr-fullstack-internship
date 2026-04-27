
# 24 — Connect the Stack (The Grand Finale)

**Assignment Date:** 11/04/2026
**Assignment:** The final full-stack integration. Connect a modern React frontend to the secure, role-based backend APIs.

---

## What I Built

This project marks the completion of my backend training. I've built a **Full-Stack MERN application** that integrates everything learned over the past months:
*   **Secure Authentication**: Signup/Login with hashed passwords.
*   **Stateful Sessions**: JWT-based sessions persisted in the browser.
*   **Role-Based Access Control (RBAC)**: Different interfaces for Users and Admins.
*   **Cross-Origin Communication**: Connected a Vite-powered React app to a Node.js/Express server.

---

## Features

### Frontend (React)
*   **Dynamic Routing**: Securely redirects users to Login if they aren't authenticated.
*   **Role Guarded UI**: The Admin Management dashboard only appears for users with the `admin` role.
*   **Persistent Login**: Uses `localStorage` to keep users logged in even after refreshing the page.
*   **Modern UI**: Glassmorphism design with a premium, dark-mode aesthetic.

### Backend (Node/Express/MongoDB)
*   **CORS Enabled**: Configured to securely accept requests from the React frontend.
*   **JWT Security**: Issues cryptographically signed tokens.
*   **Role Validation Middleware**: Protects sensitive administrative endpoints.

---

## How to Run Locally

### 1. Backend
```bash
cd backend
npm install
npm start
```
*Server runs on: http://localhost:5003*

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```
*App runs on: http://localhost:5173 (or similar)*

---

## Technologies Used

* **Frontend**: React, Vite, Axios, React Router, Lucide Icons.
* **Backend**: Node.js, Express, MongoDB, Mongoose, CORS, JWT, bcryptjs.

---

## Implementation Verification

*   ✅ **Login/Signup Works**: Correctly generates tokens and saves to state.
*   ✅ **Profile Loading**: Fetches logged-in user data automatically on mount.
*   ✅ **Admin Guard**: Standard users get "Access Denied" if they try to hit the admin API.

---

## Final Thoughts

Completing this assignment feels like a huge milestone. Moving from simple HTML files to a fully integrated, secure, and responsive full-stack application has been an incredible journey.

---

## Author

**Sarvan D Suvarna** — Part of MERN Stack Internship @ SuprMentr Technologies
