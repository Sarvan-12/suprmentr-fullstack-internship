import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import "./App.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <span className="brand">TaskApp</span>
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/tasks" className={location.pathname === "/tasks" ? "active" : ""}>Tasks</Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;