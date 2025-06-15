import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productService from '../services/ProductService';
import './Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    // Fetch featured and new arrival products
    setFeaturedProducts(productService.getFeaturedProducts());
    setNewArrivals(productService.getNewArrivals());
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Perfect Style</h1>
          <p>Explore our exclusive collection of trendy clothing for men and women</p>
          <div className="hero-buttons">
            <Link to="/women" className="btn btn-primary">Shop Women</Link>
            <Link to="/men" className="btn btn-outline">Shop Men</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Fashion Collection" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
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
            <h2>Stay in Style</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;