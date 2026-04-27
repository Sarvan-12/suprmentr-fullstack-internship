
# 22 — Secure Login

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

## Authentication Flow

1.  **Signup**: User provides email/password. The password is hashed using `bcrypt` and saved to MongoDB. A JWT is returned.
2.  **Login**: User provides credentials. The system compares the plain-text password with the hashed version in the DB. If they match, a JWT is issued.
3.  **Authorization**: For protected routes (like `/user`), the client must send the JWT in the `x-auth-token` header. The server verifies the token before serving data.

---

## Implementation Verification

### 1. Project Structure
```
22-secure-login/
├── middleware/
│   └── auth.js         # JWT verification middleware
├── models/
│   └── User.js         # User schema with pre-save hashing
├── routes/
│   └── auth.js         # Signup, Login, and User routes
├── .env                # Secret keys and config
├── server.js           # Entry point
└── README.md
```

### 2. Testing with Thunder Client
Verified the following scenarios:
* ✅ User registration (Password hashed in DB)
* ✅ User login (Token generation)
* ✅ Protected route access with valid token
* ✅ Access denied for missing or invalid tokens

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
