import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

import theme from '../theme';

function Store({ onAddToCart, onPlaceOrder, onToggleWishlist, wishlist }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

useEffect(() => {
    fetch('https://cashew-store-server.onrender.com/api/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.error('Error fetching products:', err));
}, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: theme.cream }}>
      <div style={styles.hero}>
        <h1 style={styles.heroText}>Crunch into goodness, one cashew at a time</h1>
        <input
          type="text"
          placeholder="Search cashew varieties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchBox}
        />
      </div>

      <h2 style={styles.sectionTitle}>Our Cashew Varieties</h2>

      <div style={styles.grid}>
        {filteredProducts.length === 0 ? (
          <p style={styles.noResults}>No cashew varieties match "{searchTerm}"</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onPlaceOrder={onPlaceOrder}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlist.some((item) => item.id === product.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "50px 20px",
    background: `linear-gradient(135deg, ${theme.purpleDark}, ${theme.purple})`,
  },
  heroText: {
    fontSize: "28px",
    fontWeight: "bold",
    color: theme.white,
    marginBottom: "22px",
  },
  searchBox: {
    width: "340px",
    maxWidth: "90%",
    padding: "13px 18px",
    fontSize: "15px",
    border: "none",
    borderRadius: "25px",
    outline: "none",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  },
  sectionTitle: { textAlign: "center", marginTop: "30px", color: theme.purpleDark },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
    maxHeight: "80vh",
    overflowY: "auto",
  },
  noResults: {
    textAlign: "center",
    color: theme.textMuted,
    fontSize: "16px",
    padding: "20px",
  },
};

export default Store;