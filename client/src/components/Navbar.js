import { useState } from 'react';
import { Link } from 'react-router-dom';
import theme from '../theme';
import cashewImg from '../assets/cashew-icon.png';

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={styles.navbar}>
      <div style={styles.leftGroup}>
        <button style={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <Link to="/store" style={styles.left}>
        <span style={styles.logo}><img src={cashewImg} alt="Cashew" style={{ width: '118px', height: '98px' }} /></span>
          <span style={{ ...styles.brand, fontSize: '25px', fontWeight: 'bold', color: theme.white, letterSpacing: '0.5px' }}>MK Cashews Store</span>
        </Link>
      </div>

      <div style={styles.right}>
        <Link to="/signin" style={styles.signInBtn}>Sign In</Link>
        <Link to="/cart" style={styles.cartIcon}>
          🛒 <span style={styles.cartCount}>{cartCount}</span>
        </Link>
      </div>

      {menuOpen && (
        <div style={styles.dropdown}>
          <Link to="/profile" style={styles.dropdownItem} onClick={() => setMenuOpen(false)}>👤 Profile</Link>
          <Link to="/orders" style={styles.dropdownItem} onClick={() => setMenuOpen(false)}>📦 Orders</Link>
          <Link to="/wishlist" style={styles.dropdownItem} onClick={() => setMenuOpen(false)}>♡ Wishlist</Link>
          <Link to="/offers" style={styles.dropdownItem} onClick={() => setMenuOpen(false)}>🏷️ Offers</Link>
        </div>
      )}
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 30px",
    backgroundColor: theme.purple,
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
    position: "relative",
  },
  leftGroup: { display: "flex", alignItems: "center", gap: "15px" },
  menuButton: {
    fontSize: "32px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: theme.gold,
  },
  left: { display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: theme.white },
  logo: { fontSize: "24px" },
  brand: { fontSize: "20px", fontWeight: "bold", color: theme.white, letterSpacing: "0.5px" },
  right: { display: "flex", alignItems: "center", gap: "20px" },
  signInBtn: {
    textDecoration: "none",
    color: theme.purple,
    backgroundColor: theme.gold,
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  cartIcon: { textDecoration: "none", color: theme.white, fontSize: "18px" },
  cartCount: { fontSize: "14px", fontWeight: "bold", color: theme.gold },
  dropdown: {
    position: "absolute",
    top: "64px",
    left: "30px",
    backgroundColor: theme.white,
    border: `1px solid ${theme.border}`,
    borderRadius: "10px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    zIndex: 10,
    minWidth: "180px",
    overflow: "hidden",
  },
  dropdownItem: {
    padding: "12px 18px",
    textDecoration: "none",
    color: theme.textDark,
    borderBottom: `1px solid ${theme.border}`,
    fontSize: "14px",
  },
};

export default Navbar;