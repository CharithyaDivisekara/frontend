import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Blue Shirt",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: 2099.00,
      quantity: 2,
      size: "M",
      
    },
    
    {
      id: 2,
      name: "Long Skirt",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: 999.00,
      quantity: 1,
      size: "S",
      
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
                  </div>
                </div>

                <div className="quantity-controls">
                  <button
                    className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <FaMinus />
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="quantity-btn"onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <FaPlus />
                  </button>
                </div>

                <div className="item-price">
                  <span className="price">Rs.{(item.price * item.quantity).toFixed(2)}</span>
                  <span className="unit-price">Rs.{item.price.toFixed(2)} each</span>
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
              <span>Rs.{getSubtotal().toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>{getShipping() === 0 ? 'Free' : `Rs.{getShipping().toFixed(2)}`}</span>
            </div>
            
            <div className="summary-row">
              <span>Tax</span>
              <span>Rs.{getTax().toFixed(2)}</span>
            </div>
            
            <div className="summary-total">
              <span>Total</span>
              <span>Rs.{getTotal().toFixed(2)}</span>
            </div>

           

            <button className="btn btn-primary checkout-btn">
              Proceed to Checkout
            </button>

           
          </div>
        </div>

        <div className="continue-shopping">
          <Link to="/" className="btn btn-outline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;