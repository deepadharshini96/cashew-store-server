import ProductCard from '../components/ProductCard';
import products from '../products';

function Offers({ onAddToCart, onPlaceOrder, onToggleWishlist, wishlist }) {
  const discountedProducts = products.filter((p) => p.originalPrice);

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center" }}>🏷️ Today's Offers</h2>
      {discountedProducts.length === 0 ? (
        <p style={{ textAlign: "center" }}>No offers available right now.</p>
      ) : (
        <div style={styles.grid}>
          {discountedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onPlaceOrder={onPlaceOrder}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlist.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  grid: { display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" },
};

export default Offers;