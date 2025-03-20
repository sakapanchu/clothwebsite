import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-details">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-prices">
            <div className="product-price-new">${product.new_price}</div>
            {product.old_price && (
              <div className="product-price-old">${product.old_price}</div>
            )}
            
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;