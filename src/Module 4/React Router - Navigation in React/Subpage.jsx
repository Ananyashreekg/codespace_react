import React from "react";

function Subpage() {
  const styles = {
    container: { padding: "20px", fontFamily: "Arial" },
    heading: { fontSize: "1.5rem", color: "#2980b9" },
    text: { marginTop: "10px", color: "#2c3e50" }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Subpage under About</h2>
      <p style={styles.text}>
        This subpage contains more detailed information about our mission and values.
      </p>
    </div>
  );
}

export default Subpage;
