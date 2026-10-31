import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <p style={styles.text}>Oops! The page you're looking for doesn't exist.</p>
      <p style={styles.subtext}>Maybe it went to snack on some cashews. 🌰</p>
      <Link to="/store" style={styles.button}>Back to Store</Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 20px",
    textAlign: "center",
  },
  code: { fontSize: "72px", margin: "0 0 10px", color: "#5a3921" },
  text: { fontSize: "18px", color: "#333", marginBottom: "6px" },
  subtext: { fontSize: "14px", color: "#777", marginBottom: "25px" },
  button: {
    textDecoration: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "12px 28px",
    borderRadius: "8px",
    fontWeight: "bold",
  },
};

export default NotFound;