import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaHeart, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/ProductService';
import './ProductDetails.css';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();




   useEffect(() => {
    const productData = productService.getProductById(parseInt(id));
    setProduct(productData);
    
    if (productData) {
      setSelectedSize(productData.sizes?.[0] || '');
      setRelatedProducts(productService.getRelatedProducts(productData.category, productData.gender));
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select size');
      return;
    }
    addToCart(product, selectedSize, quantity);
    navigate('/cart'); 
  // Redirect to cart page after adding
    
    console.log('Added to cart:', {
      product: product.name,
      size: selectedSize,
      quantity
    });
    
    // Here you would typically dispatch to a cart context or state management
    alert('Product added to cart successfully!');
  };

  const handleAddToWishlist = () => {
    console.log('Added to wishlist:', product.name);
    alert('Product added to wishlist!');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  if (!product) {
    return (
      <div className="product-details-page">
        <div className="container">
          <div className="loading">Loading product details...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/${product.gender}`}>{product.gender}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        {/* Product Details */}
        <div className="product-details">
          <div className="product-images">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="thumbnail-images">
              {/* Placeholder for additional images */}
              <img src={product.image} alt={product.name} className="active" />
              <img src={product.image} alt={product.name} />
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="product-rating">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <span className="rating-text">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="product-price">
              {product.originalPrice && (
                <span className="original-price">${product.originalPrice}</span>
              )}
             
            </div>

            <p className="product-description">
              {product.description || "Experience premium quality and style with this carefully crafted piece. Made from the finest materials, this item combines comfort with contemporary design."}
            </p>

            {/* Size Selection */}
            {product.sizes && (
              <div className="selection-group">
                <h4>Size: <span>{selectedSize}</span></h4>
                <div className="size-options">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

           

            {/* Action Buttons */}
            <div className="action-buttons">
              <button onClick={handleAddToCart} className="btn btn-primary add-to-cart">
                Add to Cart - Rs.{(product.price * quantity).toFixed(2)}
              </button>
             
            </div>

           
          </div>
        </div>

        {/* Product Tabs */}
        <div className="product-tabs">
          <div className="tab-buttons">
            <button
              className={activeTab === 'description' ? 'active' : ''}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={activeTab === 'reviews' ? 'active' : ''}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({product.reviewCount})
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="description-content">
                <h3>Product Details</h3>
                <p>This premium quality garment is crafted with attention to detail and designed for the modern lifestyle. Made from carefully selected materials, it offers both comfort and style.</p>
                <ul>
                  <li> Premium quality fabric</li>
                  <li>Comfortable fit</li>
                  <li>Durable construction</li>
                  <li>Easy care instructions</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="reviews-content">
                <h3>Customer Reviews</h3>
                <div className="review-summary">
                  <div className="rating-overview">
                    <span className="average-rating">{product.rating}</span>
                    <div className="stars">
                      {renderStars(product.rating)}
                    </div>
                    <span>Based on {product.reviewCount} reviews</span>
                  </div>
                </div>
                <div className="review-item">
                  <div className="reviewer-info">
                    <strong>Sarah M.</strong>
                    <div className="stars">{renderStars(5)}</div>
                  </div>
                  <p>"Great quality and perfect fit! Highly recommend this product."</p>
                </div>
               
              </div>
            )}
            

          </div>
        </div>

       
      </div>
    </div>
  );
};

export default ProductDetails;

