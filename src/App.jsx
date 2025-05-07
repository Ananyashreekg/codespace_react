import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Module 4/Hands-on Project - Build a Full-Stack Todo App/components/Navbar';

const Home = lazy(() => import('./Module 4/Hands-on Project - Build a Full-Stack Todo App/pages/Home'));
const About = lazy(() => import('./Module 4/Hands-on Project - Build a Full-Stack Todo App/pages/About'));
const Contact = lazy(() => import('./Module 4/Hands-on Project - Build a Full-Stack Todo App/pages/Contact'));
const TodosPage = lazy(() => import('./Module 4/Hands-on Project - Build a Full-Stack Todo App/pages/TodosPage'));

function App() {
  return (
    <>
      <style>
        {`
          /* Global Styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f9;
            color: #333;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          /* App Container */
          .app-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            overflow: hidden;
            flex-grow: 1;
          }

          .loading {
            text-align: center;
            font-size: 1.5rem;
            color: #007bff;
          }

          /* Navbar Styling */
          nav {
            background-color: #007bff;
            padding: 10px 20px;
            color: #fff;
            font-size: 1.2rem;
            text-align: center;
            border-radius: 8px;
          }

          nav a {
            color: #fff;
            text-decoration: none;
            margin: 0 15px;
            padding: 5px 10px;
            border-radius: 4px;
          }

          nav a:hover {
            background-color: #0056b3;
          }

          /* Route Pages - Home, About, Contact, TodosPage */
          h1, h2, h3 {
            color: #333;
          }

          h1 {
            margin-bottom: 20px;
          }

          p {
            font-size: 1rem;
            line-height: 1.6;
          }

          button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          button:hover {
            background-color: #0056b3;
          }

          /* General Layout for Suspense (loading) */
          .suspense-fallback {
            padding: 20px;
            text-align: center;
          }
        `}
      </style>
      <Router>
        <Navbar />
        <div className="app-container">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/todos" element={<TodosPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
