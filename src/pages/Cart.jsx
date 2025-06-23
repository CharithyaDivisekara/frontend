import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic White Shirt",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=300",
      price: 79.99,
      quantity: 2,
      size: "M",
      color: "White"
    },
    
    {
      id: 2,
      name: "Denim Jacket",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=300",
      price: 129.99,
      quantity: 1,
      size: "L",
      color: "Blue"
    },
    {
      id: 3,
      name: "Summer Dress",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=300",
      price: 89.99,
      quantity: 1,
      size: "S",
      color: "Floral"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getShipping = () => {
    return getSubtotal() > 100 ? 0 : 9.99;
  };

  const getTax = () => {
    return getSubtotal() * 0.08; // 8% tax
  };

  const getTotal = () => {
    return getSubtotal() + getShipping() + getTax();
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <FaShoppingBag size={80} />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link to="/" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <span className="item-count">{cartItems.length} items</span>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <div className="item-options">
                    <span>Size: {item.size}</span>
                    <span>Color: {item.color}</span>
                  </div>
                </div>

                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <FaMinus />
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <FaPlus />
                  </button>
                </div>

                <div className="item-price">
                  <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                  <span className="unit-price">${item.price.toFixed(2)} each</span>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                  title="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${getSubtotal().toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>{getShipping() === 0 ? 'Free' : `$${getShipping().toFixed(2)}`}</span>
            </div>
            
            <div className="summary-row">
              <span>Tax</span>
              <span>${getTax().toFixed(2)}</span>
            </div>
            
            <div className="summary-total">
              <span>Total</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>

            <div className="promo-code">
              <input
                type="text"
                placeholder="Enter promo code"
                className="promo-input"
              />
              <button className="btn btn-outline">Apply</button>
            </div>

            <button className="btn btn-primary checkout-btn">
              Proceed to Checkout
            </button>

            <div className="shipping-info">
              {getShipping() === 0 ? (
                <p className="free-shipping">🎉 You qualify for free shipping!</p>
              ) : (
                <p>Add ${(100 - getSubtotal()).toFixed(2)} more for free shipping</p>
              )}
            </div>
          </div>
        </div>

        <div className="continue-shopping">
          <Link to="/" className="btn btn-outline">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;