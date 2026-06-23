import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import MoonRating from '../components/MoonRating';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (e) => {
    e.preventDefault();
    addToCart(product);
    navigate('/checkout');
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.images?.[0] || 'https://placehold.co/300x400'} alt={product.name} />
        {product.discount && <span className="badge">-{product.discount}%</span>}
        <button className="add-to-cart-overlay" onClick={handleAddToCart}>
          <ShoppingCart size={18} /> Add to Cart
        </button>
      </Link>
      
      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <MoonRating rating={product.rating} count={128} />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-category">{product.category}</p>
        </Link>
        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
        </div>
        <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
