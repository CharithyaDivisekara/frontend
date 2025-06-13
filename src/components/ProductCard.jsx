import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product?.name || 'Product Name'}</h3>
      {/* Add more product details here as needed */}
    </div>
  );
};

export default ProductCard;
