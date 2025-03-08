import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./Auth.css";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginUser } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      const success = loginUser(email, password);
      if (success) {
        setError("");
        const from = location.state?.from || "/"; // Redirect to the intended page
        navigate(from);
      } else {
        setError("Invalid email or password.");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p className="auth-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;