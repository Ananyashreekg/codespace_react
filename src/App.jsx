import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Module 4/React Router - Navigation in React/NavBar";

// Lazy imports
const Home = lazy(() => import("./Module 4/React Router - Navigation in React/Home"));
const About = lazy(() => import("./Module 4/React Router - Navigation in React/About"));
const Subpage = lazy(() => import("./Module 4/React Router - Navigation in React/Subpage"));
const Contact = lazy(() => import("./Module 4/React Router - Navigation in React/Contact"));

// Simple error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return <h2>Something went wrong. Try refreshing the page.</h2>;
    return this.props.children;
  }
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ErrorBoundary>
        <Suspense fallback={<div style={{ padding: "20px" }}>Loading page, please wait...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/subpage" element={<Subpage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
