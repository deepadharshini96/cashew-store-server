import { useState } from 'react';
import { Link } from 'react-router-dom';
import { renderStars } from '../utils/stars';
import theme from '../theme';

function ProductCard({ product, onAddToCart, onPlaceOrder, onToggleWishlist, isWishlisted }) {
  const [quantity, setQuantity] = useState(1);
  const discount = product.originalPrice ? Math.round(100 - (product.price / product.originalPrice) * 100) : 0;

  return (
    <div style={styles.card}>
      {discount > 0 && <div style={styles.badge}>{discount}% OFF</div>}

      <Link to={`/product/${product.id}`} style={styles.link}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <h3 style={styles.name}>{product.name}</h3>
      </Link>

      <p style={styles.stars}>{renderStars(product.rating)} <span style={styles.ratingNum}>({product.rating})</span></p>

      <p style={styles.description}>{product.description}</p>

      <div style={styles.priceRow}>
        {product.originalPrice && <span style={styles.originalPrice}>₹{product.originalPrice}</span>}
        <span style={styles.price}>₹{product.price}</span>
      </div>

      <div style={styles.qtyRow}>
        <button style={styles.qtyButton} onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
        <span style={styles.qtyValue}>{quantity}</span>
        <button style={styles.qtyButton} onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <div style={styles.buttonRow}>
        <button style={styles.cartButton} onClick={() => onAddToCart(product, quantity)}>
          Add to Cart
        </button>
        <button style={styles.orderButton} onClick={() => onPlaceOrder(product, quantity)}>
          Place Order
        </button>
      </div>

      <button
        style={isWishlisted ? styles.wishlistActive : styles.wishlistButton}
        onClick={() => onToggleWishlist(product)}
      >
        {isWishlisted ? "♥ Wishlisted" : "♡ Add to Wishlist"}
      </button>
    </div>
  );
}

const styles = {
  card: {
    position: "relative",
    border: `1px solid ${theme.border}`,
    borderRadius: "14px",
    padding: "16px",
    width: "220px",
    textAlign: "center",
    backgroundColor: theme.white,
    boxShadow: "0 3px 12px rgba(91,44,111,0.08)",
  },
  badge: {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: theme.danger,
    color: theme.white,
    fontSize: "12px",
    fontWeight: "bold",
    padding: "4px 8px",
    borderRadius: "5px",
  },
  link: { textDecoration: "none", color: theme.textDark },
  image: { width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" },
  name: { margin: "10px 0 5px", color: theme.purpleDark },
  stars: { color: theme.gold, fontSize: "14px", margin: "0 0 8px" },
  ratingNum: { color: theme.textMuted, fontSize: "12px" },
  description: { color: theme.textMuted, fontSize: "13px" },
  priceRow: { display: "flex", justifyContent: "center", gap: "8px", alignItems: "center" },
  originalPrice: { textDecoration: "line-through", color: "#B3A6B8", fontSize: "14px" },
  price: { fontWeight: "bold", fontSize: "18px", color: theme.purpleDark },
  qtyRow: { display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", margin: "10px 0" },
  qtyButton: { width: "28px", height: "28px", borderRadius: "50%", border: `1px solid ${theme.border}`, backgroundColor: theme.cream, cursor: "pointer", fontSize: "16px", color: theme.purpleDark },
  qtyValue: { fontWeight: "bold", color: theme.textDark },
  buttonRow: { display: "flex", gap: "8px", marginBottom: "8px" },
  cartButton: { flex: 1, backgroundColor: theme.purple, color: theme.white, border: "none", padding: "9px", borderRadius: "20px", cursor: "pointer", fontSize: "13px", fontWeight: "bold" },
  orderButton: { flex: 1, backgroundColor: theme.gold, color: theme.purpleDark, border: "none", padding: "9px", borderRadius: "20px", cursor: "pointer", fontSize: "13px", fontWeight: "bold" },
  wishlistButton: { width: "100%", backgroundColor: "transparent", color: theme.danger, border: `1px solid ${theme.danger}`, padding: "7px", borderRadius: "20px", cursor: "pointer", fontSize: "13px" },
  wishlistActive: { width: "100%", backgroundColor: theme.danger, color: theme.white, border: `1px solid ${theme.danger}`, padding: "7px", borderRadius: "20px", cursor: "pointer", fontSize: "13px" },
};

export default ProductCard;