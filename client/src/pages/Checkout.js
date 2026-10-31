import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout({ checkoutItems, addresses, onAddAddress, onConfirmOrder }) {
  const navigate = useNavigate();
  const [selectedAddressId, setSelectedAddressId] = useState(addresses[0]?.id || null);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddress, setNewAddress] = useState({ name: '', phone: '', line: '', city: '', pincode: '' });

  const totalPrice = checkoutItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleAddAddress = (e) => {
    e.preventDefault();
    const id = Date.now();
    onAddAddress({ id, ...newAddress });
    setSelectedAddressId(id);
    setShowAddForm(false);
    setNewAddress({ name: '', phone: '', line: '', city: '', pincode: '' });
  };

  const handleConfirm = () => {
    if (!selectedAddressId) {
      alert("Please select a delivery address.");
      return;
    }
    const selectedAddress = addresses.find((a) => a.id === selectedAddressId);
    onConfirmOrder(selectedAddress, paymentMethod);
    navigate('/orders');
  };

  return (
    <div style={styles.container}>
      <h2>Checkout</h2>

      {/* Order Summary */}
      <div style={styles.section}>
        <h3>Order Summary</h3>
        {checkoutItems.map((item, index) => (
          <div key={index} style={styles.itemRow}>
            <img src={item.image} alt={item.name} style={styles.itemImage} />
            <span style={styles.itemName}>{item.name} × {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <h4 style={styles.total}>Total: ₹{totalPrice}</h4>
      </div>

      {/* Delivery Address */}
      <div style={styles.section}>
        <h3>Delivery Address</h3>
        {addresses.length === 0 && <p>No saved addresses.</p>}
        {addresses.map((addr) => (
          <label key={addr.id} style={styles.addressCard}>
            <input
              type="radio"
              name="address"
              checked={selectedAddressId === addr.id}
              onChange={() => setSelectedAddressId(addr.id)}
            />
            <div>
              <strong>{addr.name}</strong> ({addr.phone})
              <p style={styles.addressText}>{addr.line}, {addr.city} - {addr.pincode}</p>
            </div>
          </label>
        ))}

        {!showAddForm ? (
          <button style={styles.linkButton} onClick={() => setShowAddForm(true)}>
            + Add New Address
          </button>
        ) : (
          <form style={styles.addForm} onSubmit={handleAddAddress}>
            <input style={styles.input} placeholder="Full Name" required
              value={newAddress.name} onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })} />
            <input style={styles.input} placeholder="Phone Number" required
              value={newAddress.phone} onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })} />
            <input style={styles.input} placeholder="Address Line" required
              value={newAddress.line} onChange={(e) => setNewAddress({ ...newAddress, line: e.target.value })} />
            <input style={styles.input} placeholder="City" required
              value={newAddress.city} onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })} />
            <input style={styles.input} placeholder="Pincode" required
              value={newAddress.pincode} onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })} />
            <button type="submit" style={styles.saveButton}>Save Address</button>
          </form>
        )}
      </div>

      {/* Payment */}
      <div style={styles.section}>
        <h3>Payment Method</h3>
        <div style={styles.paymentTabs}>
          {[
            { id: 'cod', label: '💵 Cash on Delivery' },
            { id: 'card', label: '💳 Credit / Debit Card' },
            { id: 'upi', label: '📱 UPI' },
          ].map((method) => (
            <button
              key={method.id}
              style={paymentMethod === method.id ? styles.tabActive : styles.tab}
              onClick={() => setPaymentMethod(method.id)}
            >
              {method.label}
            </button>
          ))}
        </div>

        {paymentMethod === 'card' && (
          <div style={styles.paymentForm}>
            <input style={styles.input} placeholder="Card Number" />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input style={styles.input} placeholder="MM/YY" />
              <input style={styles.input} placeholder="CVV" />
            </div>
          </div>
        )}

        {paymentMethod === 'upi' && (
          <div style={styles.paymentForm}>
            <input style={styles.input} placeholder="Enter UPI ID (e.g. name@upi)" />
          </div>
        )}
      </div>

      <button style={styles.confirmButton} onClick={handleConfirm}>
        Confirm Order — ₹{totalPrice}
      </button>
    </div>
  );
}

const styles = {
  container: { padding: "30px", maxWidth: "600px", margin: "0 auto" },
  section: {
    marginBottom: "25px",
    padding: "20px",
    border: "1px solid #eee",
    borderRadius: "10px",
  },
  itemRow: { display: "flex", alignItems: "center", gap: "12px", padding: "8px 0" },
  itemImage: { width: "50px", height: "50px", objectFit: "cover", borderRadius: "6px" },
  itemName: { flex: 1 },
  total: { textAlign: "right", marginTop: "10px" },
  addressCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "10px",
    cursor: "pointer",
  },
  addressText: { margin: "4px 0 0 0", color: "#666", fontSize: "14px" },
  linkButton: {
    background: "none",
    border: "none",
    color: "#4CAF50",
    fontWeight: "bold",
    cursor: "pointer",
    padding: 0,
  },
  addForm: { display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    width: "100%",
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  paymentTabs: { display: "flex", gap: "10px", marginBottom: "15px", flexWrap: "wrap" },
  tab: {
    padding: "10px 14px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    background: "white",
    cursor: "pointer",
    fontSize: "14px",
  },
  tabActive: {
    padding: "10px 14px",
    border: "1px solid #4CAF50",
    borderRadius: "6px",
    background: "#4CAF50",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
  },
  paymentForm: { display: "flex", flexDirection: "column", gap: "10px" },
  confirmButton: {
    width: "100%",
    backgroundColor: "#ff9800",
    color: "white",
    border: "none",
    padding: "14px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Checkout;