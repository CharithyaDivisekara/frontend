import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, } from 'react-icons/fa';
import './Contact.css';


const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>We're Here to Help!</h1>
          <p>Have a question about your order, need help with a product, or just want to say hello? Our team is always ready to assist you.</p>
        </div>
      </section>
        <div className="story-image">
              <img src="https://blog.nationwide.com/wp-content/uploads/fly-images/33671/Woman-shopping-in-a-store_393616055-002-1130x750-ct.jpeg" alt="Our Story" />
            </div>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Have questions about our products, need help with an order, or just want to say hello? We're here to help!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h3>Address</h3>
                    <p>123, Kandy Road,Kurunagala.</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>074-1234567</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>info@Eshop.com</p>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;