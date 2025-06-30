import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productService from '../services/ProductService';
import { useNavigate } from 'react-router-dom';
// ...existing code...
import './Home.css';
const Home = () => {
  const navigate = useNavigate();
 
  
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Perfect Style</h1>
          <p>Explore our exclusive collection of trendy clothing for men and women</p>
          
          <div className="hero-links">
           <button className="btn-primary"style={{ marginBottom: "10px" }}onClick={() => navigate("/women")}>Shop Women
           </button>
      <br />
      <button className="btn-primary" onClick={() => navigate("/men")}> Shop Men
      </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Fashion Collection" />
        </div>
      </section>

  {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h3>Shop by Category</h3>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <div className="category-grid">
            <Link to="/women" className="category-card">
              <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBjbG90aGVzfGVufDB8fDB8fHww" alt="Women's Fashion" />
              <div className="category-overlay">
                <h3>Women's Collection</h3>
                <p>Elegant & Trendy</p>
              </div>
            </Link>
            <Link to="/men" className="category-card">
              <img src="https://t3.ftcdn.net/jpg/03/34/79/68/240_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg" alt="Men's Fashion" />
              <div className="category-overlay">
                <h3>Men's Collection</h3>
                <p>Style & Comfort</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
     
      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h3>Your Style Journey Starts Here.</h3>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;