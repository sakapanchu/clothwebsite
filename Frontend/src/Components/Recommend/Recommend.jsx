import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import ProductCard from "../ProductCard/ProductCard";
import { useInView } from "react-intersection-observer"; // For animations
import "./Recommend.css";

const Recommend = () => {
  const { isLoggedIn, loggedInUser, all_product } = useContext(ShopContext);
  const { ref, inView } = useInView({
    triggerOnce: false,  // Trigger animation every time
    threshold: 0.1, // Adjust as needed
  });

  console.log("All Products:", all_product); // Debugging
  console.log("Logged-In User Preferences:", loggedInUser?.preferences);

  if (!isLoggedIn || !loggedInUser || !loggedInUser.preferences) {
    return null;
  }

  // Filter products based on user preferences
  const recommendedProducts = all_product.filter((product) => {
    const matchesStyle = product.style.includes(loggedInUser.preferences.style);
    const matchesSize = product.size.includes(loggedInUser.preferences.size);
    const matchesColor = loggedInUser.preferences.favoriteColors.some((color) =>
      product.color.includes(color)
    );
  
    // return matchesStyle && matchesSize && matchesColor;
    return matchesStyle && matchesSize && matchesColor;
 
  });
  
  console.log("Recommended Products:", recommendedProducts);

  return (
    <div ref={ref} className={`recommended-section ${inView ? "fadeInUp" : ""}`}>
      <h1>Recommended for You</h1>
      <hr />
      <div className="product-grid">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Recommend;