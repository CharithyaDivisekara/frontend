import React, { useState, useEffect } from 'react';
import './Women.css';
import { FaFilter } from 'react-icons/fa';
import ProductCard from '../components/ProductCard'; 
import { productService } from '../services/ProductService';
// ...rest of your code...


const women = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    size: ''
  });
  const [showFilters, setShowFilters] = useState(false);

useEffect(() => {
    const menProducts = productService.getMenProducts();
    setProducts(menProducts);
    setFilteredProducts(menProducts);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const applyFilters = () => {
    let filtered = [...products];

    // Apply filters
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    if (filters.size) {
      filtered = filtered.filter(product => product.sizes?.includes(filters.size));
    }
    setFilteredProducts(filtered);
  };   

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      size: ''
    });
  };


  return (
    <div className="women-page">
      <div className="container">
        {/*hero section*/}

      <section className="page-hero">
        <h1>Women's Colloection </h1>
        <p>Discover the latest trends in Women's fashion</p>
      </section>
        
        {/* Filter and Sort Bar */}
        <div className="filter-sort-bar">
          <button
            className="filter-toggle" onClick={() => setShowFilters(!showFilters)}
            >
            <FaFilter /> Filters
          </button>

          <div className="results-count">
            {filteredProducts.length} products found
          </div>
        </div>

          <div className="products-layout">
          {/* Filters Sidebar */}
          <aside className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
          <div className="filters-header">
              <h3>Filters</h3>

            </div>
            <div className="filter-group">
              <h4>Category</h4>
              <div className="filter-options">
                
                <label>
                  <input
                    type="radio" name="category"
                    value="shirts" checked={filters.category === 'shirts'} onChange={(e) => handleFilterChange('category', e.target.value)}
                  />
                  All Categories
                </label>
                <label>
                  <input
                    type="radio" name="category"  value="shirts"
                    checked={filters.category === 'shirts'} onChange={(e) => handleFilterChange('category', e.target.value)}
                  />
                  Pants
                </label>
                <label>
                  <input type="radio" name="category" value="jackets"
                    checked={filters.category === 'jackets'}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                  />
                  Jackets
                </label>
                </div>
            </div>

            <div className="filter-group">
              <h4>Size</h4>
              <div className="filter-options">
                <label>
                  <input
                    type="radio" name="size" value="" checked={filters.size === ''}
                    onChange={(e) => handleFilterChange('size', e.target.value)}
                  />
                  All Sizes
                </label>
                <label>
                  <input
                    type="radio" name="size" value="S"  checked={filters.size === 'S'}
                    onChange={(e) => handleFilterChange('size', e.target.value)}
                  />
                  S
                </label>
                <label>
                  <input
                    type="radio" name="size" value="M"
                    checked={filters.size === 'M'}
                    onChange={(e) => handleFilterChange('size', e.target.value)}
                  />
                  M
                </label>
                <label>
                  <input
                    type="radio" name="size" value="L"
                    checked={filters.size === 'L'}
                    onChange={(e) => handleFilterChange('size', e.target.value)}
                  />
                  L
                </label>
              </div>
            </div>
          </aside>
            {/* Products Grid */}
          <main className="products-main">
            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search criteria.</p>
                <button onClick={clearFilters} className="btn btn-primary">
                  Clear Filters
                </button>
              </div>
            )}
          </main> 
      </div>  
     </div> 
   </div>
  ); 
};

export default women;
