import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaHeart, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/ProductService';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);


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

            {/* Quantity */}
            <div className="selection-group">
              <h4>Quantity:</h4>
              <div className="quantity-controls">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button onClick={handleAddToCart} className="btn btn-primary add-to-cart">
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
              <button onClick={handleAddToWishlist} className="btn btn-outline wishlist-btn">
                <FaHeart /> Wishlist
              </button>
            </div>

            {/* Product Features */}
            <div className="product-features">
              <div className="feature">
                <FaUndo />
                <span>30-day return policy</span>
              </div>
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
            <button
              className={activeTab === 'shipping' ? 'active' : ''}
              onClick={() => setActiveTab('shipping')}
            >
              Shipping & Returns
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'description' && (
              <div className="description-content">
                <h3>Product Details</h3>
                <p>This premium quality garment is crafted with attention to detail and designed for the modern lifestyle. Made from carefully selected materials, it offers both comfort and style.</p>
                <ul>
                  <li>Premium quality fabric</li>
                  <li>Comfortable fit</li>
                  <li>Durable construction</li>
                  <li>Easy care instructions</li>
                  <li>Versatile design</li>
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
                <div className="review-item">
                  <div className="reviewer-info">
                    <strong>John D.</strong>
                    <div className="stars">{renderStars(4)}</div>
                  </div>
                  <p>"Good value for money. Fast shipping and excellent customer service."</p>
                </div>
              </div>
            )}
            
            {activeTab === 'shipping' && (
              <div className="shipping-content">
                <h3>Shipping & Returns</h3>
                <div className="shipping-info">
                  <h4>Shipping Information</h4>
                  <ul>
                    <li>Orders processed within 1-2 business days</li>
                    <li>Delivery time: 3-7 business days</li>
                  </ul>
                  
                  <h4>Return Policy</h4>
                  <ul>
                    <li>30-day return window</li>
                    <li>Items must be in original condition</li>
                    <li>Free returns for defective items</li>
                    
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="related-products">
            <h2>You Might Also Like</h2>
            <div className="products-grid">
              {relatedProducts.slice(0, 4).map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;