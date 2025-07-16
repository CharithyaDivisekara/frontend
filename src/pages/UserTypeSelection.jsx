import { Link } from 'react-router-dom';
import { FaUser, FaUserShield } from 'react-icons/fa';
import './UserTypeSelection.css';

const UserTypeSelection = () => {
  return (
    <div className="user-type-page">
      <div className="container">
        <div className="selection-container">
          <div className="selection-header">
            <h1>Choose Your Experience</h1>
            <p>How would you like to access eShop today?</p>
          </div>

          <div className="user-type-cards">
            <Link to="/login" className="user-type-card customer-card">
              <div className="card-icon">
                <FaUser />
              </div>
              <h3>I'm a Customer</h3>
              <p>Browse and shop our latest fashion collections</p>
              <div className="card-features">
                <span>* Browse Products</span>
                <span>* Add to Cart</span>
                <span>* Place Orders</span>
              </div>
              <button className="btn btn-primary">Customer Login</button>
            </Link>

            <Link to="/admin-login" className="user-type-card admin-card">
              <div className="card-icon">
                <FaUserShield />
              </div>
              <h3>I'm an Admin</h3>
              <p>Manage products, orders, and site content</p>
              <div className="card-features">
                <span>* Manage Products</span>
                <span>* View Orders</span>
                <span>* Customer Management</span>
                <span>* Analytics</span>
              
              </div>
              <button className="btn btn-secondary">Admin Login</button>
            </Link>
          </div>

          <div className="selection-footer">
            <p><Link to="/">Back to Home</Link></p>
            <p>New customer? <Link to="/signup">Create an account</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelection;