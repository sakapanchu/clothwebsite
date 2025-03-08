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
  const { getTotalCartItems, isLoggedIn, setIsLoggedIn } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Update authentication state
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo1} alt="Logo" />
      </div>
      <div className="nav-menu">
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
        {!isLoggedIn ? (
          <>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </>
          
        ) : (
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