function AboutUs() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>About MK Cashews 🌰</h2>

      <p style={styles.paragraph}>
        MK Cashews started with a simple idea: bring the finest quality cashews straight from
        the farms of Tamil Nadu to your home, without any middlemen or compromise on freshness.
      </p>

      <p style={styles.paragraph}>
        Based in Panruti, Cuddalore — a region known for its rich cashew farms — we work closely
        with local growers to source, roast, and pack cashews in small batches. This ensures every
        pack you receive is fresh, crunchy, and full of flavor.
      </p>

      <p style={styles.paragraph}>
        From classic roasted and salted cashews to indulgent honey-glazed and chocolate-coated
        varieties, we've built a range that has something for every craving. Whether you're
        snacking, gifting, or cooking, MK Cashews is here to bring a little extra crunch to your day.
      </p>

      <h3 style={styles.subheading}>Our Promise</h3>
      <ul style={styles.list}>
        <li>100% natural, no artificial preservatives</li>
        <li>Sourced directly from trusted local farms</li>
        <li>Freshly packed to lock in taste and crunch</li>
        <li>Fast and reliable delivery</li>
      </ul>
    </div>
  );
}

const styles = {
  container: { padding: "40px 30px", maxWidth: "700px", margin: "0 auto" },
  title: { fontSize: "28px", marginBottom: "20px", color: "#5a3921" },
  paragraph: { fontSize: "16px", lineHeight: "1.7", color: "#444", marginBottom: "16px" },
  subheading: { fontSize: "20px", marginTop: "25px", marginBottom: "12px", color: "#5a3921" },
  list: { paddingLeft: "20px", lineHeight: "1.9", color: "#444", fontSize: "15px" },
};

export default AboutUs;