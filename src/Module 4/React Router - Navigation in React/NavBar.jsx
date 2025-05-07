import React from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
    <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
    <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
    <Link to="/contact" style={{ margin: "0 1rem" }}>Contact</Link>
    <Link to="/subpage" style={{ margin: "0 1rem" }}>Subpage</Link>
  </nav>
);

export default NavBar
