import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  const [sortType, setSortType] = useState('default');
  const [displayCount, setDisplayCount] = useState(12);

  // Filter products by category
  const filteredProducts = all_product.filter((item) => item.category === category);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortType) {
      case 'price-low-high':
        return a.new_price - b.new_price;
      case 'price-high-low':
        return b.new_price - a.new_price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Slice products based on display count
  const displayedProducts = sortedProducts.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 12, filteredProducts.length));
  };

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt={`${category} banner`} />

      <div className="shopcategory-indexSort">
        <p>
          Showing <span>1-{displayedProducts.length}</span> of {filteredProducts.length} products
        </p>
        <div className="shopcategory-sort">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            aria-label="Sort products"
          >
            <option value="default">Sort by</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
          </select>
          <img src={dropdown_icon} alt="dropdown" className="sort-dropdown-icon" />
        </div>
      </div>

      <div className="shopcategory-products">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <div className="no-products-message">
            No products available in this category
          </div>
        )}
      </div>

      {displayedProducts.length < filteredProducts.length && (
        <button className="shopcategory-loadmore" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default ShopCategory;
