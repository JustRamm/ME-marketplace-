import React from 'react';
import { User, Package, MapPin, Settings, LogOut } from 'lucide-react';
import BackButton from '../components/BackButton';
import '../styles/Account.css';

const AccountScreen = ({ onLogout }) => {
  return (
    <div className="section account-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <BackButton />
        <div className="account-layout">
          <aside className="account-sidebar">
            <div className="user-profile-header">
              <div className="avatar-placeholder">J</div>
              <div>
                <h3>Jane Doe</h3>
                <p>jane.doe@example.com</p>
              </div>
            </div>

            <nav className="account-nav">
              <button className="active"><Package size={18} /> My Orders</button>
              <button><MapPin size={18} /> Addresses</button>
              <button><Settings size={18} /> Settings</button>
              <button className="logout-btn" onClick={onLogout}><LogOut size={18} /> Logout</button>
            </nav>
          </aside>

          <main className="account-content">
            <h2>My Orders</h2>
            <div className="orders-list">
              <div className="order-item">
                <div className="order-header">
                  <span>Order #LL-9482</span>
                  <span className="status delivered">Delivered</span>
                </div>
                <div className="order-body">
                  <div className="order-img"></div>
                  <div className="order-info">
                    <h4>Lunar Glow Serum</h4>
                    <p>Quantity: 1</p>
                    <p className="price">$45.00</p>
                  </div>
                  <button className="track-btn">Track Order</button>
                </div>
              </div>

              <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your order history will appear here.</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AccountScreen;
