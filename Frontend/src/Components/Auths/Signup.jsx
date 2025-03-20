import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./Auth.css";
import { FaUser, FaLock, FaEnvelope, FaTshirt, FaRulerVertical, FaPalette } from "react-icons/fa";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [style, setStyle] = useState("");
  const [size, setSize] = useState("");
  const [favoriteColors, setFavoriteColors] = useState("");
  const [error, setError] = useState("");
  const { isLoggedIn, setIsLoggedIn, users, setUsers} = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      setError("You already have an account.");
      return;
    }
    if (!email || !password || !username || !style || !size || !favoriteColors) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Check if the user already exists
    const userExists = users.some((u) => u.email === email);
    if (userExists) {
      setError("An account with this email already exists.");
      return;
    }

    // Add the new user to the users list with preferences
    const newUser = {
      email,
      password,
      username,
      preferences: {
        style,
        size,
        favoriteColors: favoriteColors.split(",").map((color) => color.trim()), // Convert comma-separated string to array
      },
    };
    console.log("New User:", newUser);
    setUsers([...users, newUser]);
    setIsLoggedIn(true);
    // setLoggedInUser(newUser);
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    setError("");
    navigate("/login"); // Redirect to login after signup
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
          <div className="input-group">
            <FaPalette className="input-icon" />
            <input
              type="text"
              placeholder="Favorite Colors (comma-separated)"
              value={favoriteColors}
              onChange={(e) => setFavoriteColors(e.target.value)}
              required
            />
          </div>
          <div className="input-row"> 
            <div className="input-group">
              <FaTshirt className="input-icon" />
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                required
              >
                <option value="">Select Style</option>
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
                <option value="sporty">Sporty</option>
                <option value="elegant">Elegant</option>
                <option value="vintage">Vintage</option>
                <option value="floral">Floral</option>
                <option value="denim">Denim</option>
                <option value="maxi">Maxi</option>
                <option value="bohemian">Bohemian</option>
                <option value="satin">Satin</option>
                <option value="classic">Classic</option>
                <option value="playful">Playful</option>
                <option value="crop-top">Crop-top</option>
                <option value="jeans">Jeans</option>
                <option value="shorts">Shorts</option>
                <option value="skirt">Skirt</option>

              </select>
            </div>
            <div className="input-group">
              <FaRulerVertical className="input-icon" />
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
              >
                <option value="">Select Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
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