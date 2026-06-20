import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import '../styles/HomeScreen.css';

const CATEGORIES = [
  { id: 'skincare', name: 'Skincare', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80' },
  { id: 'wellness', name: 'Wellness', image: 'https://images.unsplash.com/photo-1556228448-59695627c558?auto=format&fit=crop&w=400&q=80' },
  { id: 'body-care', name: 'Body Care', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80' },
  { id: 'gifts', name: 'Gifts & Sets', image: 'https://images.unsplash.com/photo-1556228578-8d19104f47d6?auto=format&fit=crop&w=400&q=80' },
];

const CategoriesScreen = () => {
  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <BackButton />
        <h1 className="section-title">Shop by Community</h1>
        <div className="category-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {CATEGORIES.map(cat => (
            <Link to={`/shop?category=${cat.id}`} key={cat.id} className="category-card" style={{ position: 'relative', height: '350px', borderRadius: '15px', overflow: 'hidden', display: 'block' }}>
              <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '30px', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white' }}>
                <h3 style={{ fontSize: '1.5rem' }}>{cat.name}</h3>
                <span style={{ fontSize: '0.9rem', textDecoration: 'underline' }}>Browse Collection</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesScreen;
