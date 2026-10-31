import { useState } from 'react';

function Address({ addresses, onAddAddress, onDeleteAddress }) {
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState({ name: '', phone: '', line: '', city: '', pincode: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAddress({ id: Date.now(), ...newAddress });
    setNewAddress({ name: '', phone: '', line: '', city: '', pincode: '' });
    setShowForm(false);
  };

  return (
    <div style={styles.container}>
      <h2>My Addresses</h2>

      {addresses.length === 0 ? (
        <p>No addresses added yet.</p>
      ) : (
        addresses.map((addr) => (
          <div key={addr.id} style={styles.card}>
            <div>
              <strong>{addr.name}</strong> ({addr.phone})
              <p style={styles.text}>{addr.line}, {addr.city} - {addr.pincode}</p>
            </div>
            <button style={styles.deleteButton} onClick={() => onDeleteAddress(addr.id)}>
              Delete
            </button>
          </div>
        ))
      )}

      {!showForm ? (
        <button style={styles.addButton} onClick={() => setShowForm(true)}>
          + Add New Address
        </button>
      ) : (
        <form style={styles.form} onSubmit={handleSubmit}>
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
          <div style={styles.formButtons}>
            <button type="submit" style={styles.saveButton}>Save Address</button>
            <button type="button" style={styles.cancelButton} onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "30px", maxWidth: "500px", margin: "0 auto" },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "14px",
    marginBottom: "12px",
  },
  text: { margin: "4px 0 0 0", color: "#666", fontSize: "14px" },
  deleteButton: {
    backgroundColor: "#e63946",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "13px",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  form: { display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
  },
  formButtons: { display: "flex", gap: "10px" },
  saveButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#eee",
    color: "#333",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Address;