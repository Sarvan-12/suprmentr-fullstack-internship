import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (field, value) => {
    let error = "";

    if (field === "name" && !value.trim()) {
      error = "Full name is required.";
    }

    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) error = "Email is required.";
      else if (!emailRegex.test(value)) error = "Enter a valid email address.";
    }

    if (field === "password") {
      if (!value) error = "Password is required.";
      else if (value.length < 8) error = "Minimum 8 characters.";
      else if (!/[A-Z]/.test(value)) error = "Must include an uppercase letter.";
      else if (!/[0-9]/.test(value)) error = "Must include a number.";
    }

    if (field === "role" && !value) {
      error = "Please select a role.";
    }

    if (field === "terms" && !value) {
      error = "You must agree to the terms.";
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setForm({ ...form, [name]: fieldValue });
    setErrors({ ...errors, [name]: validate(name, fieldValue) });
  };

  const getPasswordStrength = () => {
    const p = form.password;
    if (!p) return null;
    if (p.length < 6) return { label: "Weak", color: "#e63946" };
    if (p.length < 8 || !/[A-Z]/.test(p) || !/[0-9]/.test(p))
      return { label: "Medium", color: "#f9c74f" };
    return { label: "Strong", color: "#2dc653" };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((field) => {
      const error = validate(field, form[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  const strength = getPasswordStrength();

  if (submitted) {
    return (
      <div className="wrapper">
        <div className="card success">
          <div className="success-icon">✅</div>
          <h2>Account Created!</h2>
          <p>Welcome, {form.name}! You signed up as <strong>{form.role}</strong>.</p>
          <button onClick={() => { setForm({ name: "", email: "", password: "", role: "", terms: false }); setErrors({}); setSubmitted(false); }}>
            Sign up again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="card">
        <h2>Create Account</h2>
        <p className="subtitle">Fill in the details below to sign up.</p>

        <div className="field">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. John Smith"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="field">
          <label>Email Address</label>
          <input
            type="text"
            name="email"
            placeholder="e.g. john@gmail.com"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Min 8 chars, 1 uppercase, 1 number"
            value={form.password}
            onChange={handleChange}
          />
          {strength && (
            <span className="strength" style={{ color: strength.color }}>
              Strength: {strength.label}
            </span>
          )}
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="field">
          <label>Your Role</label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="">-- Select a role --</option>
            <option value="Student">Student</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
          {errors.role && <span className="error">{errors.role}</span>}
        </div>

        <div className="field checkbox-field">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            checked={form.terms}
            onChange={handleChange}
          />
          <label htmlFor="terms">I agree to the Terms & Conditions</label>
        </div>
        {errors.terms && <span className="error">{errors.terms}</span>}

        <button className="submit-btn" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default App;