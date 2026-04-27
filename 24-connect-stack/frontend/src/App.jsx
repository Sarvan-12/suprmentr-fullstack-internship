
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { User, Shield, LogOut, LayoutDashboard, UserPlus, LogIn } from 'lucide-react';

// API Base URL
const API_URL = 'http://localhost:5003/api/auth';

// --- Components ---

const Navbar = ({ user, onLogout }) => (
  <nav>
    <div className="logo">SuprMenter Stack</div>
    <div className="nav-links">
      {user ? (
        <>
          <Link to="/dashboard"><LayoutDashboard size={18} /> Dashboard</Link>
          {user.role === 'admin' && <Link to="/admin"><Shield size={18} /> Admin</Link>}
          <button className="logout-btn" onClick={onLogout}><LogOut size={16} /> Logout</button>
        </>
      ) : (
        <>
          <Link to="/login"><LogIn size={18} /> Login</Link>
          <Link to="/signup"><UserPlus size={18} /> Signup</Link>
        </>
      )}
    </div>
  </nav>
);

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="form-container card">
      <h2>Login</h2>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Welcome back! Enter your details.</p>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn-primary">Login</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem' }}>
        Don't have an account? <Link to="/signup" style={{ color: '#6366f1' }}>Sign up</Link>
      </p>
    </div>
  );
};

const Signup = ({ setToken }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'user' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/signup`, formData);
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="form-container card">
      <h2>Create Account</h2>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Join the internship dashboard today.</p>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn-primary">Create Account</button>
      </form>
    </div>
  );
};

const Dashboard = ({ user }) => (
  <div className="card">
    <div className="user-info">
      <div className="avatar">{user.username.charAt(0).toUpperCase()}</div>
      <div>
        <h2 style={{ marginBottom: '0.25rem' }}>{user.username}</h2>
        <span className={`role-badge role-${user.role}`}>{user.role}</span>
      </div>
    </div>
    <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
      <h3>Your Profile Details</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <div>
          <label>Email</label>
          <p>{user.email}</p>
        </div>
        <div>
          <label>User ID</label>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{user._id}</p>
        </div>
        <div>
          <label>Account Created</label>
          <p>{new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  </div>
);

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${API_URL}/admin`, {
          headers: { 'x-auth-token': token }
        });
        setUsers(res.data.users);
      } catch (err) {
        setError(err.response?.data?.message || 'Access Denied');
      }
    };
    fetchUsers();
  }, []);

  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Shield color="#10b981" />
        <h2>Admin Management Dashboard</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Joined</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td><span className={`role-badge role-${u.role}`}>{u.role}</span></td>
              <td>{new Date(u.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await axios.get(`${API_URL}/user`, {
          headers: { 'x-auth-token': token }
        });
        setUser(res.data.user);
      } catch (err) {
        localStorage.removeItem('token');
        setToken(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;

  return (
    <Router>
      <div className="app-container">
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={!user ? <Login setToken={setToken} /> : <Navigate to="/dashboard" />} />
          <Route path="/signup" element={!user ? <Signup setToken={setToken} /> : <Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
          <Route path="/admin" element={user?.role === 'admin' ? <AdminPanel /> : <Navigate to="/dashboard" />} />
          <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}
