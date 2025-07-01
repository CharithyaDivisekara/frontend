import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic here
    console.log('Added to cart:', product.name);
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to wishlist logic here
    console.log('Added to wishlist:', product.name);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-overlay">
            <button className="wishlist-btn" onClick={handleAddToWishlist}>
              <FaHeart />
            </button>
            <button className="cart-btn" onClick={handleAddToCart}>
              <FaShoppingCart />
            </button>
          </div>
          {product.isNew && (
            <div className="new-badge">
              New
            </div>
          )}
        </div>
        
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-rating">
            <div className="stars">
              {renderStars(product.rating)}
            </div>
            <span className="rating-count">({product.reviewCount})</span>
          </div>
          <div className="product-price">
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
            <span className="current-price">Rs.{product.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;