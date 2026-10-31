import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing in with ${email}`);
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Sign In</h2>

        <label style={styles.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          placeholder="you@example.com"
          required
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          placeholder="Enter your password"
          required
        />

        <button type="submit" style={styles.button}>Sign In</button>

        <p style={styles.footerText}>
          Don't have an account? <span style={styles.link} onClick={() => navigate('/signup')}>Sign Up</span>
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
    width: "320px",
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

export default SignIn;