import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Module 4/React Router - Navigation in React/NavBar";

const Home = lazy(() => import("./Module 4/React Router - Navigation in React/Home"));
const About = lazy(() => import("./Module 4/React Router - Navigation in React/About"));
const Contact = lazy(() => import("./Module 4/React Router - Navigation in React/Contact"));
const Subpage = lazy(() => import("./Module 4/React Router - Navigation in React/Subpage"));

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/subpage" element={<Subpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
