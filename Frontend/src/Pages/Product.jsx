import React,{useContext} from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from './Breadcrums/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  // Find the product by ID
  const product = all_product.find((e) => e.id === Number(productId));

  // If product is not found, show a message
  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>
        <p>Sorry, the product you are looking for does not exist.</p>
      </div>
    );
  }
  return (
    <div className="product-page">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product
