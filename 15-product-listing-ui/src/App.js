import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './App.css';

const products = [
  { id: 1, name: "Wireless Headphones", price: 1299, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop" },
  { id: 2, name: "Running Shoes", price: 899, category: "Fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop" },
  { id: 3, name: "Coffee Maker", price: 2499, category: "Kitchen", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop" },
  { id: 4, name: "Bluetooth Speaker", price: 799, category: "Electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop" },
  { id: 5, name: "Casual T-Shirt", price: 399, category: "Fashion", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop" },
  { id: 6, name: "Samosa", price: 20, category: "Kitchen", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" },
  { id: 7, name: "Smart Watch", price: 4999, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop" },
  { id: 8, name: "Denim Jacket", price: 1599, category: "Fashion", image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=300&h=200&fit=crop" },
];

const categories = ["All", "Electronics", "Fashion", "Kitchen"];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts = activeFilter === "All"
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="app">
      <header className="header">
        <h1>ShopEasy</h1>
        <p>Find what you love</p>
      </header>

      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;