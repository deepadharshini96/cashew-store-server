import { useState } from 'react';
import { Link } from 'react-router-dom';
import theme from '../theme';

function Profile({ profile, addresses, orders, onUpdateProfile }) {
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(profile);

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateProfile(form);
    setEditMode(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.pageTitle}>My Profile</h2>

      <div style={styles.section}>
        {!editMode ? (
          <>
            <div style={styles.fieldBox}>
              <span style={styles.fieldLabel}>Name</span>
              <span style={styles.fieldValue}>{profile.name || "Not set"}</span>
            </div>
            <div style={styles.fieldBox}>
              <span style={styles.fieldLabel}>Email</span>
              <span style={styles.fieldValue}>{profile.email || "Not set"}</span>
            </div>
            <div style={styles.fieldBox}>
              <span style={styles.fieldLabel}>Phone</span>
              <span style={styles.fieldValue}>{profile.phone || "Not set"}</span>
            </div>
            <button style={styles.editButton} onClick={() => { setForm(profile); setEditMode(true); }}>
              Edit Profile
            </button>
          </>
        ) : (
          <form style={styles.form} onSubmit={handleSave}>
            <label style={styles.label}>Full Name</label>
            <input
              style={styles.input}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />

            <label style={styles.label}>Gmail</label>
            <input
              type="email"
              style={styles.input}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@gmail.com"
            />

            <label style={styles.label}>Phone Number</label>
            <input
              style={styles.input}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Your phone number"
            />

            <div style={styles.formButtons}>
              <button type="submit" style={styles.saveButton}>Save</button>
              <button type="button" style={styles.cancelButton} onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </form>
        )}
      </div>

      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Saved Addresses</h3>
          <Link to="/address" style={styles.manageLink}>Manage</Link>
        </div>
        {addresses.length === 0 ? (
          <p style={styles.mutedText}>No saved addresses yet.</p>
        ) : (
          addresses.map((addr) => (
            <div key={addr.id} style={styles.addressCard}>
              <strong style={{ color: theme.purpleDark }}>{addr.name}</strong> ({addr.phone})
              <p style={styles.addressText}>{addr.line}, {addr.city} - {addr.pincode}</p>
            </div>
          ))
        )}
      </div>

      <div style={styles.quickLinks}>
        <Link to="/orders" style={styles.linkCard}>📦 My Orders ({orders.length})</Link>
        <Link to="/wishlist" style={styles.linkCard}>♡ My Wishlist</Link>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "30px", maxWidth: "500px", margin: "0 auto", backgroundColor: theme.cream },
  pageTitle: { color: theme.purpleDark },
  section: {
    marginBottom: "25px",
    padding: "22px",
    border: `1px solid ${theme.border}`,
    borderRadius: "14px",
    backgroundColor: theme.white,
  },
  sectionHeader: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  sectionTitle: { color: theme.purpleDark, margin: 0 },
  manageLink: { color: theme.gold, fontWeight: "bold", textDecoration: "none", fontSize: "14px" },
  fieldBox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.cream,
    border: `1px solid ${theme.border}`,
    borderRadius: "10px",
    padding: "12px 16px",
    marginBottom: "12px",
  },
  fieldLabel: { fontSize: "12px", color: theme.textMuted, marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.5px" },
  fieldValue: { fontSize: "15px", color: theme.textDark, fontWeight: "bold" },
  mutedText: { color: theme.textMuted },
  editButton: {
    marginTop: "10px",
    backgroundColor: theme.purple,
    color: theme.white,
    border: "none",
    padding: "11px 22px",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  form: { display: "flex", flexDirection: "column", gap: "8px" },
  label: { fontSize: "13px", fontWeight: "bold", color: theme.purpleDark },
  input: {
    padding: "10px",
    border: `1px solid ${theme.border}`,
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "10px",
    backgroundColor: theme.cream,
  },
  formButtons: { display: "flex", gap: "10px" },
  saveButton: {
    backgroundColor: theme.purple,
    color: theme.white,
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: theme.border,
    color: theme.textDark,
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
  },
  addressCard: {
    border: `1px solid ${theme.border}`,
    borderRadius: "10px",
    padding: "12px",
    marginBottom: "8px",
    backgroundColor: theme.cream,
  },
  addressText: { margin: "4px 0 0 0", color: theme.textMuted, fontSize: "14px" },
  quickLinks: { display: "flex", flexDirection: "column", gap: "10px" },
  linkCard: {
    textDecoration: "none",
    color: theme.purpleDark,
    border: `1px solid ${theme.border}`,
    borderRadius: "10px",
    padding: "14px",
    fontWeight: "bold",
    backgroundColor: theme.white,
  },
};

export default Profile;