import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Module 4/Hands-on Project - Build a Full-Stack Todo App/components/Navbar';
import Home from './Module 4/Hands-on Project - Build a Full-Stack Todo App/pages/Home';
import About from './Module 4/Hands-on Project - Build a Full-Stack Todo App/pages/About';
import Contact from './Module 4/Hands-on Project - Build a Full-Stack Todo App/pages/Contact';
import TodosPage from './Module 4/Hands-on Project - Build a Full-Stack Todo App/pages/TodosPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
