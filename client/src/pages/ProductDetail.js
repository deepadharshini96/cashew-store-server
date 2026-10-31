import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import products from '../products';
import { renderStars } from '../utils/stars';

function ProductDetail({ onAddToCart, onPlaceOrder, onToggleWishlist, wishlist }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [extraReviews, setExtraReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({ name: '', stars: 5, comment: '' });

  if (!product) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Product not found</h2>
        <button onClick={() => navigate('/store')} style={styles.backButton}>Back to Store</button>
      </div>
    );
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);
  const discount = product.originalPrice ? Math.round(100 - (product.price / product.originalPrice) * 100) : 0;
  const allReviews = [...(product.reviews || []), ...extraReviews];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setExtraReviews([...extraReviews, reviewForm]);
    setReviewForm({ name: '', stars: 5, comment: '' });
  };

  return (
    <div style={styles.container}>
      <Link to="/store" style={styles.backLink}>← Back to Store</Link>

      <div style={styles.detailCard}>
        <div style={{ position: "relative" }}>
          {discount > 0 && <div style={styles.badge}>{discount}% OFF</div>}
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>

        <div style={styles.info}>
          <h1 style={styles.name}>{product.name}</h1>
          <p style={styles.stars}>{renderStars(product.rating)} <span style={styles.ratingNum}>({product.rating}) · {allReviews.length} reviews</span></p>

          <div style={styles.priceRow}>
            {product.originalPrice && <span style={styles.originalPrice}>₹{product.originalPrice}</span>}
            <span style={styles.price}>₹{product.price}</span>
          </div>

          <p style={styles.description}>{product.description}</p>

          <div style={styles.qtyRow}>
            <span style={{ fontWeight: "bold" }}>Quantity:</span>
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
      </div>

      <div style={styles.reviewsSection}>
        <h3>Customer Reviews ({allReviews.length})</h3>
        {allReviews.length === 0 ? (
          <p>No reviews yet. Be the first to review!</p>
        ) : (
          allReviews.map((rev, index) => (
            <div key={index} style={styles.reviewCard}>
              <p style={styles.reviewStars}>{renderStars(rev.stars)}</p>
              <p style={styles.reviewName}>{rev.name}</p>
              <p style={styles.reviewComment}>{rev.comment}</p>
            </div>
          ))
        )}

        <form style={styles.reviewForm} onSubmit={handleReviewSubmit}>
          <h4>Write a Review</h4>
          <input
            style={styles.input}
            placeholder="Your name"
            required
            value={reviewForm.name}
            onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
          />
          <select
            style={styles.input}
            value={reviewForm.stars}
            onChange={(e) => setReviewForm({ ...reviewForm, stars: parseInt(e.target.value) })}
          >
            <option value={5}>★★★★★ (5)</option>
            <option value={4}>★★★★☆ (4)</option>
            <option value={3}>★★★☆☆ (3)</option>
            <option value={2}>★★☆☆☆ (2)</option>
            <option value={1}>★☆☆☆☆ (1)</option>
          </select>
          <textarea
            style={{ ...styles.input, minHeight: "70px" }}
            placeholder="Share your experience..."
            required
            value={reviewForm.comment}
            onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
          />
          <button type="submit" style={styles.submitReviewButton}>Submit Review</button>
        </form>
      </div>

      <div style={styles.relatedSection}>
        <h3>You might also like</h3>
        <div style={styles.relatedGrid}>
          {relatedProducts.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} style={styles.relatedCard}>
              <img src={p.image} alt={p.name} style={styles.relatedImage} />
              <p style={styles.relatedName}>{p.name}</p>
              <p style={styles.relatedPrice}>₹{p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "30px", maxWidth: "900px", margin: "0 auto" },
  backLink: { display: "inline-block", marginBottom: "20px", color: "#4CAF50", textDecoration: "none", fontWeight: "bold" },
  backButton: { backgroundColor: "#4CAF50", color: "white", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer", marginTop: "15px" },
  detailCard: { display: "flex", gap: "30px", flexWrap: "wrap", marginBottom: "30px" },
  badge: { position: "absolute", top: "10px", left: "10px", backgroundColor: "#e63946", color: "white", fontSize: "13px", fontWeight: "bold", padding: "5px 10px", borderRadius: "5px" },
  image: { width: "320px", height: "320px", objectFit: "cover", borderRadius: "12px" },
  info: { flex: 1, minWidth: "250px" },
  name: { fontSize: "28px", marginBottom: "8px" },
  stars: { color: "#f5a623", fontSize: "16px", marginBottom: "12px" },
  ratingNum: { color: "#777", fontSize: "13px" },
  priceRow: { display: "flex", gap: "10px", alignItems: "center", marginBottom: "15px" },
  originalPrice: { textDecoration: "line-through", color: "#999", fontSize: "16px" },
  price: { fontSize: "22px", fontWeight: "bold", color: "#333" },
  description: { fontSize: "16px", color: "#555", marginBottom: "20px", lineHeight: "1.5" },
  qtyRow: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" },
  qtyButton: { width: "30px", height: "30px", borderRadius: "50%", border: "1px solid #ccc", backgroundColor: "white", cursor: "pointer", fontSize: "16px" },
  qtyValue: { fontWeight: "bold", fontSize: "16px" },
  buttonRow: { display: "flex", gap: "12px", marginBottom: "15px" },
  cartButton: { flex: 1, backgroundColor: "#4CAF50", color: "white", border: "none", padding: "12px", borderRadius: "6px", cursor: "pointer", fontSize: "15px" },
  orderButton: { flex: 1, backgroundColor: "#ff9800", color: "white", border: "none", padding: "12px", borderRadius: "6px", cursor: "pointer", fontSize: "15px" },
  wishlistButton: { width: "100%", backgroundColor: "transparent", color: "#e63946", border: "1px solid #e63946", padding: "10px", borderRadius: "6px", cursor: "pointer", fontSize: "14px" },
  wishlistActive: { width: "100%", backgroundColor: "#e63946", color: "white", border: "1px solid #e63946", padding: "10px", borderRadius: "6px", cursor: "pointer", fontSize: "14px" },
  reviewsSection: { borderTop: "1px solid #eee", paddingTop: "20px", marginBottom: "30px" },
  reviewCard: { borderBottom: "1px solid #f0f0f0", padding: "10px 0" },
  reviewStars: { color: "#f5a623", margin: "0 0 4px" },
  reviewName: { fontWeight: "bold", margin: "0 0 4px" },
  reviewComment: { margin: 0, color: "#555" },
  reviewForm: { display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px", maxWidth: "400px" },
  input: { padding: "10px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "14px" },
  submitReviewButton: { backgroundColor: "#4CAF50", color: "white", border: "none", padding: "10px", borderRadius: "6px", cursor: "pointer" },
  relatedSection: { borderTop: "1px solid #eee", paddingTop: "20px" },
  relatedGrid: { display: "flex", gap: "20px", flexWrap: "wrap" },
  relatedCard: { width: "160px", textDecoration: "none", color: "#333", border: "1px solid #ddd", borderRadius: "10px", padding: "10px", textAlign: "center" },
  relatedImage: { width: "100%", height: "110px", objectFit: "cover", borderRadius: "8px" },
  relatedName: { fontSize: "14px", fontWeight: "bold", margin: "8px 0 4px" },
  relatedPrice: { fontSize: "14px", color: "#555", margin: 0 },
};

export default ProductDetail;