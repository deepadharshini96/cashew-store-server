function Cart({ cart, onPlaceOrder, onRemoveFromCart }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.details}>
                <p style={styles.name}>{item.name}</p>
                <p style={styles.price}>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>
              </div>
              <button style={styles.deleteButton} onClick={() => onRemoveFromCart(item.id)}>
                Delete
              </button>
            </div>
          ))}
          <h3>Total: ₹{totalPrice}</h3>
          <button style={styles.orderButton} onClick={onPlaceOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  cartItem: { display: "flex", alignItems: "center", gap: "15px", padding: "10px 0", borderBottom: "1px solid #eee" },
  image: { width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px" },
  details: { display: "flex", flexDirection: "column", flex: 1 },
  name: { fontWeight: "bold", margin: 0 },
  price: { margin: 0, color: "#555" },
  deleteButton: { backgroundColor: "#e63946", color: "white", border: "none", padding: "8px 14px", borderRadius: "5px", cursor: "pointer", fontSize: "13px" },
  orderButton: { marginTop: "20px", backgroundColor: "#4CAF50", color: "white", border: "none", padding: "12px 24px", borderRadius: "6px", fontSize: "16px", cursor: "pointer" },
};

export default Cart;