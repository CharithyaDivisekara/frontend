import { Link } from 'react-router-dom';
import { FaFacebook,FaInstagram,FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
            
          {/* Company Info */}
          <div className="footer-section">
            <h3>eShop</h3>
            <p>Your ultimate destination for trendy men's and women's clothing. We bring you the latest fashion at affordable prices.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/men">Men's Collection</Link></li>
              <li><Link to="/women">Women's Collection</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
            
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Shipping Info</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>123, Kandy Road, Kurunagala</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>074 - 123-4567</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>info@Eshop.com</span>
              </div>
            </div>
          </div>
        </div>

       
        

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2025 Eshop. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;