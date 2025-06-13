import logo from './logo.svg';
import React from 'react';
import './App.css';

import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import HomePage from './pages/Home';
import Signup from './pages/Signup';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            
          </Routes>
        </main>
       <Footer />
      </div>
    </Router>
  );
}

export default App;
