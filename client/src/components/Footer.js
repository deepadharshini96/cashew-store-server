import { Link } from 'react-router-dom';
import theme from '../theme';

function Footer() {
  return (
    <div style={styles.footer}>
      <div style={styles.section}>
        <h3 style={styles.brand}>🌰 MK Cashews</h3>
        <p style={styles.text}>Premium cashews, delivered fresh to your doorstep.</p>
      </div>

      <div style={styles.section}>
        <h4 style={styles.heading}>Contact Us</h4>
        <p style={styles.text}>📍 Panruti, Cuddalore, Tamil Nadu - 607103</p>
        <p style={styles.text}>📧 deepaguru57000@gmail.com</p>
        <p style={styles.text}>📞 +91 6369299918</p>
      </div>

      <div style={styles.section}>
        <h4 style={styles.heading}>Quick Links</h4>
        <Link to="/about" style={styles.footerLink}>About Us</Link>
        <Link to="/contact" style={styles.footerLink}>Contact Us</Link>
        <p style={styles.text}>Terms & Conditions</p>
        <p style={styles.text}>Privacy Policy</p>
      </div>

      <div style={styles.section}>
        <h4 style={styles.heading}>Follow Us</h4>
        <p style={styles.text}>Instagram · Facebook · WhatsApp</p>
      </div>

      <div style={styles.bottomBar}>
        <p style={styles.copyright}>© {new Date().getFullYear()} MK Cashews. All rights reserved.</p>
      </div>
    </div>
  );
}

const styles = {
  footer: {
    backgroundColor: theme.purpleDark,
    color: theme.white,
    padding: "40px 30px 0",
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "space-between",
    marginTop: "40px",
  },
  section: {
    minWidth: "200px",
    flex: 1,
  },
  brand: { fontSize: "20px", marginBottom: "10px", color: theme.white },
  heading: { fontSize: "16px", marginBottom: "10px", color: theme.gold },
  text: { fontSize: "14px", margin: "6px 0", color: "#D8CDE0" },
  footerLink: { display: "block", fontSize: "14px", margin: "6px 0", color: "#D8CDE0", textDecoration: "none" },
  bottomBar: {
    width: "100%",
    borderTop: "1px solid #57406b",
    marginTop: "20px",
    padding: "15px 0",
    textAlign: "center",
  },
  copyright: { fontSize: "13px", color: "#C3B6CC", margin: 0 },
};

export default Footer;