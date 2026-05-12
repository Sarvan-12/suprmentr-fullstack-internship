
# 22 — Role Guard

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

## 🛠️ How to Run Locally

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Sarvan-12/suprmentr-fullstack-internship.git
   ```
2. **Navigate to this folder**:
   ```bash
   cd 22-role-guard
   ```
3. **Configure environment variables**:
   - Create a `.env` file in the root of this folder.
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/role_guard
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
   - Use the provided `THUNDER_CLIENT_REQUESTS.txt` to test the user vs admin access flow.

---

## Implementation Verification

### 1. User/Admin Registration
The system correctly assigns roles during signup.
![Signup Roles](./screenshots/01-signup-user.png)
![Signup Admin](./screenshots/02-signup-admin.png)

### 2. Standard User Access
A user can access their profile but is blocked from administrative areas.
![User Profile](./screenshots/03-user-profile.png)
![Forbidden Access](./screenshots/04-admin-forbidden.png)

### 3. Admin Authorization
Admins have full access to the management dashboard.
![Admin Success](./screenshots/05-admin-success.png)

---

## What I Learned

* The difference between **Authentication** (Who are you?) and **Authorization** (What can you do?).
* Implementing **Higher-Order Functions** in middleware.
* Using Mongoose `enum` to strictly define allowed values for a field.
* Best practices for communicating permission errors to the frontend.

---

## Author

**Sarvan D Suvarna** — Part of MERN Stack Internship @ SuprMentr Technologies
