import { useState } from 'react';

function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Us</h2>
      <p style={styles.subtitle}>Have a question or feedback? We'd love to hear from you.</p>

      <div style={styles.layout}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>Name</label>
          <input
            style={styles.input}
            placeholder="Your name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            style={styles.input}
            placeholder="you@example.com"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <label style={styles.label}>Message</label>
          <textarea
            style={{ ...styles.input, minHeight: "100px" }}
            placeholder="Write your message..."
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button type="submit" style={styles.button}>Send Message</button>

          {submitted && <p style={styles.successText}>✅ Thank you! Your message has been sent.</p>}
        </form>

        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>Reach Us Directly</h3>
          <p style={styles.infoText}>📍 Panruti, Cuddalore, Tamil Nadu - 607103</p>
          <p style={styles.infoText}>📧 deepaguru57000@gmail.com</p>
          <p style={styles.infoText}>📞 +91 6369299918</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "40px 30px", maxWidth: "800px", margin: "0 auto" },
  title: { fontSize: "28px", marginBottom: "8px", color: "#5a3921" },
  subtitle: { fontSize: "15px", color: "#666", marginBottom: "30px" },
  layout: { display: "flex", gap: "30px", flexWrap: "wrap" },
  form: { flex: 2, minWidth: "280px", display: "flex", flexDirection: "column", gap: "6px" },
  label: { fontSize: "14px", fontWeight: "bold" },
  input: {
    padding: "10px",
    marginBottom: "14px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    fontSize: "15px",
    cursor: "pointer",
  },
  successText: { color: "#4CAF50", marginTop: "12px", fontWeight: "bold" },
  infoBox: {
    flex: 1,
    minWidth: "220px",
    backgroundColor: "#fff8f0",
    padding: "20px",
    borderRadius: "10px",
    height: "fit-content",
  },
  infoTitle: { fontSize: "18px", marginBottom: "12px", color: "#5a3921" },
  infoText: { fontSize: "14px", color: "#555", margin: "8px 0" },
};

export default ContactUs;