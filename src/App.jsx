import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ProductListingScreen from './screens/ProductListingScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import AccountScreen from './screens/AccountScreen';
import OrderSuccessScreen from './screens/OrderSuccessScreen';
import WishlistScreen from './screens/WishlistScreen';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import BestSellersScreen from './screens/BestSellersScreen';
import TrackOrderScreen from './screens/TrackOrderScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import SearchResultsScreen from './screens/SearchResultsScreen';
import './index.css';

// Component to handle navigation after splash screen
const AppContent = ({ isLoggedIn, handleLogin, handleSignup, handleLogout }) => {
  const navigate = useNavigate();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (!hasRedirected) {
      navigate('/');
      setHasRedirected(true);
    }
  }, [navigate, hasRedirected]);

  return (
    <div className="app" key="content">
      <Header isLoggedIn={isLoggedIn} />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/shop" element={<ProductListingScreen />} />
          <Route path="/categories" element={<CategoriesScreen />} />
          <Route path="/best-sellers" element={<BestSellersScreen />} />
          <Route path="/track-order" element={<TrackOrderScreen />} />
          <Route path="/search" element={<SearchResultsScreen />} />
          <Route path="/product/:id" element={<ProductDetailScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/checkout" element={<CheckoutScreen />} />
          <Route path="/order-success" element={<OrderSuccessScreen />} />
          <Route path="/wishlist" element={<WishlistScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/about" element={<AboutScreen />} />

          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/account" /> : <LoginScreen onLogin={handleLogin} />}
          />
          <Route
            path="/forgot-password"
            element={<ForgotPasswordScreen />}
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to="/account" /> : <SignupScreen onSignup={handleSignup} />}
          />
          <Route
            path="/account"
            element={isLoggedIn ? <AccountScreen onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <AppContent
            isLoggedIn={isLoggedIn}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            handleLogout={handleLogout}
          />
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
