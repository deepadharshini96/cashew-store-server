function Wishlist({ wishlist, onAddToCart }) {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in your wishlist yet.</p>
      ) : (
        <div style={styles.grid}>
          {wishlist.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <button style={styles.button} onClick={() => onAddToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  grid: { display: "flex", flexWrap: "wrap", gap: "20px" },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    width: "200px",
    textAlign: "center",
  },
  image: { width: "100%", height: "130px", objectFit: "cover", borderRadius: "8px" },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "8px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
};

export default Wishlist;