import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import Men from './pages/Men'
import Women from './pages/Women';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AdminLogin from './pages/AdminLogin';
import UserTypeSelection from './pages/UserTypeSelection';
import AdminDashboard from './pages/AdminDashboard';




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/men" element={<Men/>} />
            <Route path="/Women" element={<Women/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/get-started" element={<UserTypeSelection />} />
             <Route path="/admin-login" element={<AdminLogin />} />
             <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
       <Footer />
      </div>
    </Router>
  );
}

export default App;
