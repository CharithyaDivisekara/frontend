import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { productService } from '../services/ProductService';
import ProductCard from '../components/ProductCard';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [products, setProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  
  // Form state for adding/editing products
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    originalPrice: '',
    category: '',
    gender: '',
    image: '',
    description: '',
    sizes: [],
    colors: [],
    brand: '',
    rating: 4.5,
    reviewCount: 0,
    isNew: false,
    isFeatured: false
  });

 

  useEffect(() => {
  const fetchProducts = async () => {
    const allProducts = await productService.getAllProducts();
    setProducts(Array.isArray(allProducts) ? allProducts : []);
  };
  fetchProducts();
}, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleArrayInputChange = (e, field) => {
    const value = e.target.value;
    const array = value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({
      ...prev,
      [field]: array
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const productData = {
      ...formData,
      id: editingProduct ? editingProduct.id : Date.now(),
      price: parseFloat(formData.price),
      originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
      rating: parseFloat(formData.rating),
      reviewCount: parseInt(formData.reviewCount)
    };

    if (editingProduct) {
      // Update existing product
      productService.updateProduct(productData);
      setEditingProduct(null);
    } else {
      // Add new product
      productService.addProduct(productData);
    }

    // Reset form
    setFormData({
      name: '',
      price: '',
      originalPrice: '',
      category: '',
      gender: '',
      image: '',
      description: '',
      sizes: [],
      colors: [],
      brand: '',
      rating: 4.5,
      reviewCount: 0,
      isNew: false,
      isFeatured: false
    });
    
    setShowAddForm(false);
    setProducts(productService.getAllProducts());
    alert(editingProduct ? 'Product updated successfully!' : 'Product added successfully!');
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      originalPrice: product.originalPrice ? product.originalPrice.toString() : '',
      category: product.category,
      gender: product.gender,
      image: product.image,
      description: product.description || '',
      sizes: product.sizes || [],
      colors: product.colors || [],
      brand: product.brand,
      rating: product.rating.toString(),
      reviewCount: product.reviewCount.toString(),
      isNew: product.isNew || false,
      isFeatured: product.isFeatured || false
    });
    setShowAddForm(true);
  };

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      productService.deleteProduct(productId);
      setProducts(productService.getAllProducts());
      alert('Product deleted successfully!');
    }
  };

  const cancelForm = () => {
    setShowAddForm(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      price: '',
      originalPrice: '',
      category: '',
      gender: '',
      image: '',
      description: '',
      sizes: [],
      colors: [],
      brand: '',
      rating: 4.5,
      reviewCount: 0,
      isNew: false,
      isFeatured: false
    });
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="container">
          <div className="header-content">
            <div className="admin-info">
              <h1>Admin Dashboard</h1>
              <p>Welcome back, {user?.name || 'Admin'}</p>
            </div>
            <button onClick={logout} className="btn btn-outline logout-btn">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="dashboard-content">
          {/* Navigation Tabs */}
          <div className="admin-tabs">
            <button
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
              onClick={() => setActiveTab('products')}
            >
              Products ({products.length})
            </button>
            <button
              className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              Orders
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="tab-content">
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Total Products</h3>
                  <p className="stat-number">{products.length}</p>
                </div>
                <div className="stat-card">
                  <h3>Men's Products</h3>
                  <p className="stat-number">{products.filter(p => p.gender === 'men').length}</p>
                </div>
                <div className="stat-card">
                  <h3>Women's Products</h3>
                  <p className="stat-number">{products.filter(p => p.gender === 'women').length}</p>
                </div>
                <div className="stat-card">
                  <h3>Featured Products</h3>
                  <p className="stat-number">{products.filter(p => p.isFeatured).length}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="tab-content">
              <div className="products-header">
                <h2>Product Management</h2>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="btn btn-primary add-product-btn"
                >
                  + Add New Product
                </button>
              </div>

              {/* Add/Edit Product Form */}
              {showAddForm && (
                <div className="product-form-overlay">
                  <div className="product-form-container">
                    <div className="form-header">
                      <h3>{editingProduct ? 'Edit Product' : 'Add New Product'}</h3>
                      <button onClick={cancelForm} className="close-btn">×</button>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="product-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="name">Product Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter product name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="brand">Brand *</label>
                          <input
                            type="text"
                            id="brand"
                            name="brand"
                            value={formData.brand}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter brand name"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="price">Price *</label>
                          <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            required
                            step="0.01"
                            placeholder="0.00"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="originalPrice">Original Price</label>
                          <input
                            type="number"
                            id="originalPrice"
                            name="originalPrice"
                            value={formData.originalPrice}
                            onChange={handleInputChange}
                            step="0.01"
                            placeholder="0.00"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="category">Category *</label>
                          <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select Category</option>
                            <option value="shirts">Shirts</option>
                            <option value="pants">Pants</option>
                            <option value="jackets">Jackets</option>
                            <option value="dresses">Dresses</option>
                            <option value="tops">Tops</option>
                            <option value="bottoms">Bottoms</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="gender">Gender *</label>
                          <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select Gender</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="image">Image URL *</label>
                        <input
                          type="url"
                          id="image"
                          name="image"
                          value={formData.image}
                          onChange={handleInputChange}
                          required
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          rows="3"
                          placeholder="Enter product description"
                        ></textarea>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="sizes">Sizes (comma separated)</label>
                          <input
                            type="text"
                            id="sizes"
                            value={formData.sizes.join(', ')}
                            onChange={(e) => handleArrayInputChange(e, 'sizes')}
                            placeholder="S, M, L, "
                          />
                        </div>
                       
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="rating">Rating</label>
                          <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={formData.rating}
                            onChange={handleInputChange}
                            min="0"
                            max="5"
                            step="0.1"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="reviewCount">Review Count</label>
                          <input
                            type="number"
                            id="reviewCount"
                            name="reviewCount"
                            value={formData.reviewCount}
                            onChange={handleInputChange}
                            min="0"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group checkbox-group">
                          <label className="checkbox-label">
                            <input
                              type="checkbox"
                              name="isNew"
                              checked={formData.isNew}
                              onChange={handleInputChange}
                            />
                            <span>Mark as New Product</span>
                          </label>
                        </div>
                        <div className="form-group checkbox-group">
                          <label className="checkbox-label">
                            <input
                              type="checkbox"
                              name="isFeatured"
                              checked={formData.isFeatured}
                              onChange={handleInputChange}
                            />
                            <span>Mark as Featured</span>
                          </label>
                        </div>
                      </div>

                      <div className="form-actions">
                        <button type="button" onClick={cancelForm} className="btn btn-outline">
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                          {editingProduct ? 'Update Product' : 'Add Product'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Products List */}
              <div className="products-list">
                <div className="products-grid">
                  {products.map(product => (
                    <div key={product.id} className="admin-product-card">
                      <ProductCard product={product} />
                      <div className="product-actions">
                        <button
                          onClick={() => handleEdit(product)}
                          className="btn btn-outline edit-btn"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="btn btn-danger delete-btn"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="tab-content">
              <h2>Order Management</h2>
              <p>Order management features coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;