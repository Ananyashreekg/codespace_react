import React from "react";

function Contact() {
  const styles = {
    container: { padding: "20px", fontFamily: "Arial" },
    heading: { fontSize: "2rem", color: "#17ae60" },
    text: { marginTop: "10px", color: "#1d3436" },
    email: { marginTop: "10px", fontWeight: "bold" }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.text}>
        We'd love to hear from you! For inquiries or feedback, reach out at:
      </p>
      <p style={styles.email}>ananyashreekg933@gmail.com.com</p>
    </div>
  );
}

export default Contact;
