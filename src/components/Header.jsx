import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      
      console.log('Searching for:', searchQuery);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">

          {/* Logo */}
          <Link to="/" className="logo">
            <h2>eShop</h2>
          </Link>


          {/* Search Bar */}
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <FaSearch />
            </button>
          </form>

          {/* Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/men" onClick={() => setIsMenuOpen(false)}>Men</Link></li>
              <li><Link to="/women" onClick={() => setIsMenuOpen(false)}>Women</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>

          {/* User Actions */}
          <div className="user-actions">
            <Link to="/cart" className="cart-icon">
              <FaShoppingCart />
              <span className="cart-count">0</span>
            </Link>
            <Link to="/login" className="user-icon">
              <FaUser />
            </Link>
            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;