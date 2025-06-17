import { FaUsers, FaHeart, FaShippingFast, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About eShop</h1>
            <p>Your trusted partner in fashion, bringing you the latest trends and timeless classics since 2020.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                eShop was born from a simple belief: everyone deserves to look and feel their best. 
                Founded in 2020 by a team of fashion enthusiasts, we set out to create an online destination 
                where style meets affordability, and quality meets accessibility.
              </p>
              <p>
                What started as a small collection of carefully curated pieces has grown into a comprehensive 
                fashion platform serving thousands of customers worldwide. We're proud to offer an extensive 
                range of clothing for both men and women, from casual everyday wear to special occasion outfits.
              </p>
              <p>
                Our mission remains unchanged: to democratize fashion and make it possible for everyone to 
                express their unique style without breaking the bank.
              </p>
            </div>
            
            <div className="story-image">
              <img src="https://blog.nationwide.com/wp-content/uploads/fly-images/33671/Woman-shopping-in-a-store_393616055-002-1130x750-ct.jpeg" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="our-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaHeart />
              </div>
              <h3>Quality First</h3>
              <p>We carefully select every piece in our collection, ensuring that quality and craftsmanship meet our high standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaUsers />
              </div>
              <h3>Customer Focused</h3>
              <p>Our customers are at the heart of everything we do. We listen, we care, and we continuously improve based on your feedback.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaShippingFast />
              </div>
              <h3>Fast & Reliable</h3>
              <p>We understand that when you find something you love, you want it fast. That's why we offer quick shipping and reliable service.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FaAward />
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our business, from product selection to customer service and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>50,000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Products Sold</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Fashion Brands</p>
            </div>
            <div className="stat-item">
              <h3>4.8/5</h3>
              <p>Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Sustainability */}
      <section className="sustainability">
        <div className="container">
          <div className="sustainability-content">
            <div className="sustainability-text">
              <h2>Our Commitment to Sustainability</h2>
              <p>
                eShpo, we believe that fashion should not come at the cost of our planet. 
                We're committed to sustainable practices throughout our supply chain and operations.
              </p>
              <ul>
                <li>Partnering with eco-friendly manufacturers</li>
                <li>Using sustainable packaging materials</li>
                <li>Supporting ethical labor practices</li>
                <li>Reducing our carbon footprint</li>
                <li>Promoting circular fashion through our recycling program</li>
              </ul>
            </div>
            <div className="sustainability-image">
              <img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sustainability" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;