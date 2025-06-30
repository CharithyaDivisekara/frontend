import React from 'react'
import './Women.css';
import { FaFilter } from 'react-icons/fa';
import{Product } from '../components/ProductCard'; 
import{ useState } from 'react';


export default function woman() {
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
