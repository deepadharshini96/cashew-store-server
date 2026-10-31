import theme from '../theme';
import cashewLogo from '../assets/cashew-logo.png';

function LandingPage({ onEnterStore }) {
  return (
    <div style={styles.container}>
      <img src={cashewLogo} alt="MK Cashews" style={styles.logo} />
      <button style={styles.button} onClick={onEnterStore}>
        Let's Purchase
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(135deg, ${theme.purpleDark} 0%, ${theme.purple} 100%)`,
  },
  logo: {
    width: "280px",
    height: "280px",
    objectFit: "contain",
    marginBottom: "40px",
    borderRadius: "50%",
  },
  button: {
    backgroundColor: theme.gold,
    color: theme.purpleDark,
    border: "none",
    padding: "16px 36px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "30px",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(212,175,55,0.4)",
  },
};

export default LandingPage;