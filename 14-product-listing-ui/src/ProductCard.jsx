import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <div className="card-body">
        <span className="category-badge">{product.category}</span>
        <h3 className="card-title">{product.name}</h3>
        <div className="card-footer">
          <span className="price">₹{product.price}</span>
          <button className="add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;