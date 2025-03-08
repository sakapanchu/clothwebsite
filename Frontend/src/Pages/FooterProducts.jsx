import React from 'react';
import './CSS/FooterProducts.css';

const Products = () => {
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <p>
        Explore our wide range of products designed to suit every occasion. From casual wear to formal attire, 
        we offer something for everyone.
      </p>
      <div className="product-categories">
        <h2>Categories</h2>
        <ul>
          <li>Frocks</li>
          <li>Tops & Skirts</li>
          <li>Pants</li>
          <li>Accessories</li>
        </ul>
      </div>
    </div>
  );
};

export default Products;