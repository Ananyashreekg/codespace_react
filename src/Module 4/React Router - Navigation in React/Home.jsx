import React from "react";

function Home() {
  const styles = {
    container: { padding: "20px", fontFamily: "Arial" },
    heading: { fontSize: "2rem", color: "#333" },
    text: { marginTop: "10px", color: "#555" }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Home Page!</h1>
      <p style={styles.text}>
        This is the central hub of our site. Use the navigation links above to explore more.
      </p>
    </div>
  );
}

export default Home;
