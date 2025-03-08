import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, image, new_price, old_price }) => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to top when item is clicked
  };
  console.log("Item ID:", id); // Debugging log
  console.log("Item Image:", image); // Debugging log

  // Ensure `id` and `image` are valid
  if (!id || !image) {
    console.error("Invalid ID or Image:", { id, image }); // Debugging log
    return null; // Skip rendering if data is invalid
  }

  return (
    <div className="item">
      {id ? ( // Only render the Link if `id` is valid
        <Link to={`/product/${id}`} onClick={handleClick} className="item-link">
          <img src={image} alt={name} className="item-image" />
          <div className="item-details">
            <h3 className="item-name">{name}</h3>
            <div className="item-prices">
              <div className="item-price-new">${new_price}</div>
              {old_price && (
                <div className="item-price-old">${old_price}</div>
              )}
            </div>
          </div>
        </Link>
      ):(
        <div className="item-link">
          <img src={image} alt={name} onClick={handleClick} className="item-image" />
          <div className="item-details">
            <h3 className="item-name">{name}</h3>
            <div className="item-prices">
              <div className="item-price-new">${new_price}</div>
              {old_price && (
                <div className="item-price-old">${old_price}</div>
              )}
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Item;
