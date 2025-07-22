import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaEye, FaEyeSlash } from 'react-icons/fa';
import './AdminLogin.css';
import { useAuth } from '../context/AuthContext';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { loginAsAdmin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          adminId,
          password
        })
      });

      const result = await response.text();
      if (result === "Login successful") {
        loginAsAdmin({ id: adminId, name: 'Admin User', role: 'admin', loginTime: new Date().toISOString() });
        navigate('/admin-dashboard');
      } else {
        setError(result);
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="container">
        <div className="admin-login-container">
          <div className="login-header">
            <div className="admin-icon">
              <FaUserShield />
            </div>
            <h1>Admin Access</h1>
            <p>Enter your admin credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="admin-login-form">
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="adminId">Admin ID</label>
              <input
                type="text"
                id="adminId"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
                placeholder="Enter your Admin ID"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary admin-login-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Verifying...' : 'Access Admin Panel'}
            </button>
          </form>

          <div className="demo-credentials">
            <h4>Demo Credentials:</h4>
            <p><strong>Admin ID:</strong> ADMIN001</p>
            <p><strong>Password:</strong> admin123</p>
          </div>

          <div className="back-link">
            <button onClick={() => navigate('/')} className="btn btn-outline">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;