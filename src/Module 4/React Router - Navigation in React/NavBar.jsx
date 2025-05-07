import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const styles = {
    nav: {
      background: "#f5f5f5",
      padding: "15px",
      display: "flex",
      gap: "20px",
      borderBottom: "1px solid #ddd"
    },
    link: {
      textDecoration: "none",
      color: "#333",
      fontWeight: "500"
    },
    active: {
      color: "#007BFF",
      fontWeight: "bold"
    }
  };

  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={({ isActive }) => (isActive ? { ...styles.link, ...styles.active } : styles.link)}>
        Home
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? { ...styles.link, ...styles.active } : styles.link)}>
        About
      </NavLink>
      <NavLink
        to="/about/subpage"
        style={({ isActive }) => (isActive ? { ...styles.link, ...styles.active } : styles.link)}
      >
        Subpage
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => (isActive ? { ...styles.link, ...styles.active } : styles.link)}>
        Contact
      </NavLink>
    </nav>
  );
}

export default NavBar;
