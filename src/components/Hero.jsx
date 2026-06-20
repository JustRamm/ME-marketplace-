import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">Empower Dreams with <span className="accent-text">ME SHOP</span></h1>
          <p className="hero-subtitle">Handcrafted treasures delivered with purpose and passion.
Experience shopping that makes a difference.</p>
          <div className="hero-btns">
            <Link to="/shop" className="primary-btn">Shop Now</Link>
            <Link to="/about" className="secondary-btn">Learn More</Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="placeholder-image">
            <img src="Product_img\28.png" alt="Hero Placeholder" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
