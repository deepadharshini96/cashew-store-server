import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp({ onSignUp }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onSignUp(form);
navigate('/store');
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Create Account</h2>

        <label style={styles.label}>Full Name</label>
        <input
          style={styles.input}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your full name"
          required
        />

        <label style={styles.label}>Gmail</label>
        <input
          type="email"
          style={styles.input}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@gmail.com"
          required
        />

        <label style={styles.label}>Phone Number</label>
        <input
          style={styles.input}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="Your phone number"
          required
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          style={styles.input}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Create a password"
          required
        />

        <label style={styles.label}>Confirm Password</label>
        <input
          type="password"
          style={styles.input}
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          placeholder="Re-enter your password"
          required
        />

        <button type="submit" style={styles.button}>Sign Up</button>

        <p style={styles.footerText}>
          Already have an account? <span style={styles.link} onClick={() => navigate('/signin')}>Sign In</span>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
  },
  form: {
    width: "340px",
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },
  title: { textAlign: "center", marginBottom: "20px" },
  label: { fontSize: "14px", marginBottom: "5px", fontWeight: "bold" },
  input: {
    padding: "10px",
    marginBottom: "18px",
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
    fontSize: "16px",
    cursor: "pointer",
  },
  footerText: { textAlign: "center", marginTop: "15px", fontSize: "14px" },
  link: { color: "#4CAF50", fontWeight: "bold", cursor: "pointer" },
};

export default SignUp;