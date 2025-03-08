import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import { useNavigate } from "react-router-dom";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart , isLoggedIn} = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState('');
  const navigate = useNavigate();

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate("/login", { state: { from: "/product" }}); // Redirect to login if not logged in
    } 

    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }else{
      addToCart(product.id);
      alert(`${product.name} (Size: ${selectedSize}) added to cart!`);
    }
  };

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[1, 2, 3].map((index) => (
            <img key={index} src={product.image} alt={`Product ${index}`} />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="Main Product" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          {[...Array(4)].map((_, index) => (
            <img key={index} src={star_icon} alt="Star Icon" />
          ))}
          <img src={star_dull_icon} alt="Dull Star Icon" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Introducing our latest collection of premium clothing, designed to elevate your style.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div
                key={size}
                className={selectedSize === size ? 'selected' : ''}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
        <p className='productdisplay-right-category'>
          <span>Category:</span> {product.category}
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags:</span> Modern, Latest, Fashionable
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;