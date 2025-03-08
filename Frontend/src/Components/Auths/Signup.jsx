import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./Auth.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { isLoggedIn, setIsLoggedIn, users, setUsers } = useContext(ShopContext); // Add users and setUsers from context
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      setError("You already have an account.");
      return;
    }
    if (!email || !password || !username) {
      setError("Please fill in all fields.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      // Check if the user already exists
      const userExists = users.some((u) => u.email === email);
      if (userExists) {
        setError("An account with this email already exists.");
      } else {
        // Add the new user to the users list
        setUsers([...users, { email, password, username }]);
        setIsLoggedIn(true);
        setError("");
        navigate("/login"); // Redirect to login after signup
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
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
          <button type="submit">Sign Up</button>
        </form>
        <p className="auth-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;