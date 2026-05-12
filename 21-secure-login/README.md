
# 21 — Secure Login

**Assignment Date:** 06/04/2026
**Assignment:** Build a secure signup/login system with password hashing and JWT authentication.

---

## What I Built

Implemented a production-ready authentication system using **Node.js**, **Express**, and **MongoDB**. The application focuses on security best practices by never storing plain-text passwords and using **JSON Web Tokens (JWT)** for stateless session management.

---

## Features

* **Secure Password Hashing:** Uses `bcryptjs` with auto-generated salts to protect user passwords in the database.
* **JWT Authentication:** Generates cryptographically signed tokens upon successful signup/login.
* **Protected Routes:** Custom middleware to verify JWT tokens before allowing access to private user data.
* **Mongoose Middleware:** Automatic password hashing using the `.pre('save')` hook in the User model.
* **Environment Security:** Uses `.env` for managing sensitive secrets like the JWT key and database URI.

---

## Technologies Used

* Node.js & Express.js
* MongoDB & Mongoose
* **bcryptjs** (Password hashing)
* **jsonwebtoken** (Authentication tokens)
* **dotenv** (Environment variables)

---

## 🛠️ How to Run Locally

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Sarvan-12/suprmentr-fullstack-internship.git
   ```
2. **Navigate to this folder**:
   ```bash
   cd 21-secure-login
   ```
3. **Configure environment variables**:
   - Create a `.env` file in the root of this folder.
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/secure_login
     JWT_SECRET=your_super_secret_key_here
     ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Start the server**:
   ```bash
   node server.js
   ```
6. **Test the API**:
   - The server runs on `http://localhost:5000`.
   - Use the provided `THUNDER_CLIENT_REQUESTS.txt` to test the signup and login flow.

---

## Implementation Verification

### 1. User Registration (Signup)
The password is automatically hashed before being saved to MongoDB.
![Signup Verification](./screenshots/01-signup.png)

### 2. User Authentication (Login)
Verification of credentials and generation of a secure JWT token.
![Login Verification](./screenshots/02-login.png)

### 3. Protected Route Authorization
Accessing restricted data using the JWT token in the request header.
![Protected Route](./screenshots/03-protected-route.png)

---

## What I Learned

* Why **password hashing** is critical for security and why we use `bcrypt`.
* How **JWT** works (Header.Payload.Signature) and why it's better for APIs than cookies.
* Implementing **Express Middleware** to protect specific routes.
* Using Mongoose schema methods and hooks to modularize logic.
* Managing secrets securely using environment variables.

---

## Author

**Sarvan D Suvarna** — Part of MERN Stack Internship @ SuprMentr Technologies
