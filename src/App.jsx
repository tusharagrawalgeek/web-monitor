import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Status from "./pages/Status";

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-content">
          <h2 className="logo">Web Monitor</h2>

          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>

            <NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>

            <NavLink to="/status" className="nav-link">
              Status
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;