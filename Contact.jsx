import React from 'react'
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => { 
  return (
    <div>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>We’re Here to Help!</h1>
          <p>Have a question about your order, need help with a product, or just want to say hello? Our team is always ready to assist you..</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Have questions about our products, need help with an order, or just want to say hello? We're here to help!</p>
            </div>
            {/* Contact Details */}
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h3>Address</h3>
                  <p>123 Fashion Street<br />Style City, SC 12345<br />United States</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567<br />Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>info@stylehub.com<br />support@stylehub.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <div className="contact-text">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
