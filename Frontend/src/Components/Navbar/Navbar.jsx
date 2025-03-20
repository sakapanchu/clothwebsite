import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import './Navbar.css';
import logo1 from '../Assets/logo1.png';
import cart_icon from '../Assets/cart_icon.png';
import { FaSearch, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for responsive menu
  const { getTotalCartItems, isLoggedIn, setIsLoggedIn } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setIsMenuOpen(false); // Close the menu after selecting an item
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter logic based on searchQuery
    console.log('Search Query:', searchQuery);
    // Example: Navigate to a filtered page or update state
    navigate(`/search?query=${searchQuery}`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Update authentication state
    navigate('/'); // Redirect to home page
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <div className="navbar">
      <div className="nav-logo" onClick={() => navigate('/')}>
        <img src={logo1} alt="Logo" />
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Responsive Menu */}
      <div className={`nav-menu ${isMenuOpen ? 'visible' : ''}`}>
        <ul>
          {['shop', 'frocks', 'topskirts', 'pants'].map((item) => (
            <li
              key={item}
              onClick={() => handleMenuClick(item)}
              className={menu === item ? 'active' : ''}
            >
              <Link to={`/${item === 'shop' ? '' : item}`} style={{ textDecoration: 'none' }}>
                {item === 'topskirts' ? 'Tops/Skirts' : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
              {menu === item && <hr />}
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>

      <div className="nav-login-cart">
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>

        {isLoggedIn && (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;