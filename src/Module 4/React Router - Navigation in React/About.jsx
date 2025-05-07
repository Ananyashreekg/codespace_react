import React from "react";

function About() {
  const styles = {
    container: { padding: "20px", fontFamily: "Arial" },
    heading: { fontSize: "2rem", color: "#2c3e50" },
    text: { marginTop: "10px", color: "#34495e" }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us Page</h1>
      <p style={styles.text}>
        We are a team of passionate developers building awesome React applications.
      </p>
    </div>
  );
}

export default About;
