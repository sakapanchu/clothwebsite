import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Products from './Pages/FooterProducts';
import Product from './Pages/Product';
import Terms from './Pages/Terms';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/Assets/banner_women.png';
import ShopContextProvider from './Context/ShopContext';
import Login from './Components/Auths/Login';
import Signup from './Components/Auths/Signup';


// Helper component to conditionally render the Footer
const AppContent = () => {
  const location = useLocation(); // Get the current route location
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup'; // Check if the current route is Login or Signup

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path='/frocks' element={<ShopCategory banner={women_banner} category="frocks" />} />
        <Route path='/topskirts' element={<ShopCategory banner={women_banner} category="topSkirts" />} />
        <Route path='/pants' element={<ShopCategory banner={women_banner} category="pants" />} />
        <Route path='/product' element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      {!isAuthPage && <Footer />} {/* Conditionally render Footer */}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ShopContextProvider>
          <AppContent /> {/* Use the helper component */}
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;