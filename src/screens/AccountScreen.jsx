import { useEffect, useState } from "react";
import {
  Package,
  MapPin,
  Settings,
  LogOut,
  Heart,
} from "lucide-react";
import BackButton from "../components/BackButton";
import { supabase } from "../supabase";
import { useWishlist } from "../context/wishlistContext";
import OrdersTab from "../components/account/OrdersTab";
import WishlistTab from "../components/account/wishlistTab";
import "../styles/Account.css";

const AccountScreen = ({ user, onLogout }) => {
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [activeTab, setActiveTab] = useState("orders");

  const displayName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email?.split("@")[0] ||
    "User";

  const avatarLetter = displayName.charAt(0).toUpperCase();
  const email = user?.email || "";

  const { wishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    if (!email) return;

    const fetchOrders = async () => {
      setLoadingOrders(true);

      const { data, error } = await supabase
        .schema("marketplace_dataspace")
        .from("orders")
        .select("*")
        .eq("customer_email", email)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setOrders(data);
      }

      setLoadingOrders(false);
    };

    fetchOrders();
  }, [email]);

  const getStatusBadge = (status) => {
    if (!status) return null;

    const s = status.toLowerCase();

    let cls = "status ";

    if (s === "delivered") cls += "delivered";
    else if (s === "shipped") cls += "shipped";
    else cls += "processing";

    return <span className={cls}>{status}</span>;
  };

  return (
    <div className="section account-page" style={{ paddingTop: "120px" }}>
      <div className="container">
        <BackButton />

        <div className="account-layout">
          {/* Sidebar */}
          <aside className="account-sidebar">
            <div className="user-profile-header">
              <div className="avatar-placeholder">{avatarLetter}</div>

              <div>
                <h3>{displayName}</h3>
                <p>{email}</p>
              </div>
            </div>

            <nav className="account-nav">
              <button
                className={activeTab === "orders" ? "active" : ""}
                onClick={() => setActiveTab("orders")}
              >
                <Package size={18} />
                My Orders
              </button>

              <button
                className={activeTab === "wishlist" ? "active" : ""}
                onClick={() => setActiveTab("wishlist")}
              >
                <Heart size={18}/>
                Wishlist
              </button>

              <button>
                <MapPin size={18} />
                Addresses
              </button>

              <button>
                <Settings size={18} />
                Settings
              </button>

              <button className="logout-btn" onClick={onLogout}>
                <LogOut size={18} />
                Logout
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="account-content">

            {/* ================= ORDERS ================= */}

            {activeTab === "orders" && (
              <OrdersTab
                orders={orders}
                loadingOrders={loadingOrders}
              />
            )}

            {/* ================= WISHLIST ================= */}

              {activeTab === "wishlist" && (
                <WishlistTab
                  wishlist={wishlist}
                  removeFromWishlist={removeFromWishlist}
                />
              )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AccountScreen;