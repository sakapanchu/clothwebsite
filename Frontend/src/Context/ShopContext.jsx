import React, { createContext, useState, useEffect } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[all_product[index].id] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Authentication state
  const [users, setUsers] = useState([]); // List of registered users

  // Check local storage for login state on initial load
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const addToCart = (itemId) => {
    if (!isLoggedIn) {
      alert("Please log in to add items to the cart.");
      return false;
    }
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    return true;
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((totalAmount, itemId) => {
      const itemInfo = all_product.find((product) => product.id === Number(itemId));
      return totalAmount + (itemInfo?.new_price || 0) * cartItems[itemId];
    }, 0);
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((totalItem, quantity) => totalItem + quantity, 0);
  };

  const loginUser = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // Save login state
      return true;
    }
    return false;
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("loggedInUser"); // Clear login state
    setCartItems(getDefaultCart()); // Clear the cart on logout
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    isLoggedIn,
    setIsLoggedIn,
    users,
    setUsers,
    loginUser,
    logoutUser,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;