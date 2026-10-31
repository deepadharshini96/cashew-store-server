function Toast({ message }) {
  if (!message) return null;
  return <div style={styles.toast}>{message}</div>;
}

const styles = {
  toast: {
    position: "fixed",
    bottom: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#333",
    color: "white",
    padding: "12px 24px",
    borderRadius: "8px",
    fontSize: "14px",
    zIndex: 1000,
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
};

export default Toast;