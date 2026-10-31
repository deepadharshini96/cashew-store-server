function Orders({ orders, onAdvanceStatus }) {
  const stages = ["Placed", "Packed", "Shipped", "Delivered"];

  return (
    <div style={{ padding: "30px" }}>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        orders.map((order) => {
          const currentIndex = stages.indexOf(order.status);
          return (
            <div key={order.id} style={styles.orderCard}>
              <div style={styles.orderHeader}>
                <span>Order #{order.id}</span>
                <span style={styles.status}>{order.status}</span>
              </div>
              <p style={styles.date}>Placed on {order.date}</p>

              {order.items.map((item, index) => (
                <div key={index} style={styles.itemRow}>
                  <img src={item.image} alt={item.name} style={styles.image} />
                  <span style={styles.itemName}>{item.name} × {item.quantity}</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}

              <p style={styles.total}>Total: ₹{order.total}</p>
              <p style={styles.detail}>Payment: {order.paymentMethod === 'cod' ? 'Cash on Delivery' : order.paymentMethod === 'card' ? 'Card' : 'UPI'}</p>
              {order.address && (
                <p style={styles.detail}>
                  Delivering to: {order.address.name}, {order.address.line}, {order.address.city} - {order.address.pincode}
                </p>
              )}

              <div style={styles.tracker}>
                {stages.map((stage, index) => (
                  <div key={stage} style={styles.trackerStep}>
                    <div style={index <= currentIndex ? styles.dotActive : styles.dot}></div>
                    <span style={index <= currentIndex ? styles.stageActive : styles.stage}>{stage}</span>
                    {index < stages.length - 1 && (
                      <div style={index < currentIndex ? styles.lineActive : styles.line}></div>
                    )}
                  </div>
                ))}
              </div>

              {currentIndex < stages.length - 1 && (
                <button style={styles.advanceButton} onClick={() => onAdvanceStatus(order.id)}>
                  Simulate: Mark as {stages[currentIndex + 1]}
                </button>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

const styles = {
  orderCard: { border: "1px solid #ddd", borderRadius: "10px", padding: "18px", marginBottom: "20px" },
  orderHeader: { display: "flex", justifyContent: "space-between", fontWeight: "bold", marginBottom: "5px" },
  status: { color: "#4CAF50" },
  date: { color: "#777", fontSize: "13px", marginBottom: "10px" },
  itemRow: { display: "flex", alignItems: "center", gap: "12px", padding: "6px 0" },
  image: { width: "50px", height: "50px", objectFit: "cover", borderRadius: "6px" },
  itemName: { flex: 1 },
  total: { fontWeight: "bold", marginTop: "10px" },
  detail: { fontSize: "14px", color: "#555" },
  tracker: { display: "flex", alignItems: "center", margin: "35px 0 10px" },
  trackerStep: { display: "flex", alignItems: "center", flex: 1, position: "relative" },
  dot: { width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "#ddd", flexShrink: 0 },
  dotActive: { width: "16px", height: "16px", borderRadius: "50%", backgroundColor: "#4CAF50", flexShrink: 0 },
  line: { flex: 1, height: "3px", backgroundColor: "#ddd", marginLeft: "-4px" },
  lineActive: { flex: 1, height: "3px", backgroundColor: "#4CAF50", marginLeft: "-4px" },
  stage: { fontSize: "11px", color: "#999", position: "absolute", top: "20px", left: "-10px", whiteSpace: "nowrap" },
  stageActive: { fontSize: "11px", color: "#4CAF50", fontWeight: "bold", position: "absolute", top: "20px", left: "-10px", whiteSpace: "nowrap" },
  advanceButton: { marginTop: "10px", backgroundColor: "#ff9800", color: "white", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontSize: "13px" },
};

export default Orders;