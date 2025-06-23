import React from 'react'
import './Men.css';
import { FaFilter } from 'react-icons/fa';
import { useState } from 'react';
import { productService } from '../services/ProductService';
 // Assuming you have a products data file





export default function Men() {
  return (
    <div className="men-page">
      <div className="container">
        {/*hero section*/}

      <section className="page-hero">
        <h1>Men's Colloection </h1>
        <p>Discover the latest trends in men's fashion</p>
      </section>
      
      {/* Filter and Sort Bar */}
        <div className="filter-sort-bar">
          <button
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter /> Filters
          </button>
        </div>  
        

    </div>
  </div>


  ); 
};
