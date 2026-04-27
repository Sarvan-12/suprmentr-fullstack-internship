
# 23 — Role Guard

**Assignment Date:** 08/04/2026
**Assignment:** Implement Role-Based Access Control (RBAC) to restrict specific routes to Admin users only.

---

## What I Built

Enhanced the authentication system by adding user roles. This allows the application to differentiate between a standard **User** and an **Admin**, ensuring that sensitive routes (like user management dashboards) are only accessible to authorized personnel.

---

## Features

* **Role-Based Access Control (RBAC):** Custom middleware that validates user roles against a permitted list before allowing access to a route.
* **Expanded User Model:** Added a `role` field with `enum` validation (`user` or `admin`).
* **Bespoke Error Handling:** Differentiates between **401 Unauthorized** (not logged in) and **403 Forbidden** (logged in but lacks permission).
* **Token-Encoded Roles:** User roles are baked directly into the JWT payload for efficient permission checking without constant database lookups.
* **Admin Dashboard:** A protected route that allows admins to view all registered users.

---

## Technologies Used

* Node.js & Express.js
* MongoDB & Mongoose
* JSON Web Tokens (JWT)
* bcryptjs (Password security)

---

## How It Works (The Role Guard Logic)

1.  **Signup/Login**: The server identifies the user's role and includes it in the JWT.
2.  **Auth Middleware**: Decodes the token and attaches the user's ID and Role to the request object (`req.user`).
3.  **Role Guard Middleware**: A higher-order function that takes an array of allowed roles (e.g., `roleCheck(['admin'])`). It checks if the `req.user.role` matches.
4.  **Enforcement**: If the role matches, the request proceeds. If not, a `403 Forbidden` response is returned.

---

## Implementation Verification

### 1. Project Structure
```
23-role-guard/
├── middleware/
│   ├── auth.js         # JWT verification
│   └── roleCheck.js    # Permission validation
├── models/
│   └── User.js         # Added 'role' field
├── routes/
│   └── auth.js         # Added /admin route
├── server.js
└── README.md
```

### 2. Testing Scenarios
* ✅ **Normal User**: Can access `/api/auth/user` but gets **403 Forbidden** on `/api/auth/admin`.
* ✅ **Admin User**: Can access both the standard user route and the admin dashboard.
* ✅ **Guest**: Gets **401 Unauthorized** on both routes.

---

## What I Learned

* The difference between **Authentication** (Who are you?) and **Authorization** (What can you do?).
* Implementing **Higher-Order Functions** in middleware.
* Using Mongoose `enum` to strictly define allowed values for a field.
* Best practices for communicating permission errors to the frontend.

---

## Author

**Sarvan D Suvarna** — Part of MERN Stack Internship @ SuprMentr Technologies
