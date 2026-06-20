import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import '../styles/HomeScreen.css';

const COMMUNITIES = [
  {
    id: 1,
    name: "Mind Empowered",
    image: "\logo.jpg",
    image: "logo.jpg",
  },
  {
    id: 2,
    name: "Smrithi",
    image: "Smrithi.png",
  },
  {
    id: 3,
    name: "Kairali Foundation",
    image: "kairali.png",
  },
  {
    id: 4,
    name: "Fr. Agostino Vicini Special School",
    image: "ag.png",
  },
];

const MOCK_PRODUCTS = [
  { id: 1, name: "Blue Floral Bottle", category: "Mind Empowered", price: 45, oldPrice: 60, rating: 5, discount: 25, image: "Product_img/36.png" },
  { id: 2, name: "vibrant handmade flowers", category: "Mind Empowered", price: 32, rating: 4,  image: "Product_img/14.png"},
  { id: 3, name: "Hand-Painted Round Art Piece", category: "Mind Empowered", price: 28, oldPrice: 35, rating: 5, discount: 20,  image: "Product_img/25.png" },
  { id: 4, name: "Hand-Painted Pouch", category: "Mind Empowered", price: 55, rating: 4,  image: "Product_img/29.png"},
  { id: 5, name: "Hand-Painted Round Art Piece", category: "Mind Empowered", price: 38, rating: 5,  image: "Product_img/24.png" },
  { id: 7, name: "Hand-painted Handkerchief", category: "Mind Empowered", price: 48, rating: 5,  image: "Product_img/21.png" },
  { id: 8, name: "Mini Canvas Painting", category: "Mind Empowered", price: 25, rating: 4,  image: "Product_img/8.png" },
  { id: 9, name: "Handcrafted mini painting", category: "Mind Empowered", price: 48, rating: 5,  image: "Product_img/11.png" },
  { id: 10, name: "Mini Canvas Painting", category: "Mind Empowered", price: 25, rating: 4,  image: "Product_img/9.png" },
  { id: 11, name: "Christmas Tree Keychains", category: "Mind Empowered", price: 48, rating: 5,  image: "Product_img/34.png" },
  
];

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <Hero />

      <section className="section categories">
        <div className="container">
          <h2 className="section-title">Shop by Community</h2>

          <div className="category-grid">
            {COMMUNITIES.map((cat, i) => (
              <motion.div
                key={cat.id}
                className="category-item"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="cat-placeholder">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="cat-image"
                  />
                </div>

                <span>{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section featured-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">New Arrivals</h2>
            <a href="/shop" className="view-all">
              View All
            </a>
          </div>

          <div className="products-grid">
            {MOCK_PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section promo-banner">
        <div className="container">
          <div className="banner-content">
            <h3>Join the Moon Club</h3>
            <p>
              Get 15% off your first order and exclusive access to new launches.
            </p>

            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
