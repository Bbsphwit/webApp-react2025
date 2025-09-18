import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: for styling the home page

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome!</h1>
        <p>This is a simple React application built with functional components and React Router for navigation.</p>
      </header>

      <main className="home-main">
        <section className="feature-section">
          <h2>Our Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>BMI Calculator</h3>
              <p>Calculate your Body Mass Index quickly and easily.</p>
              <Link to="/bmi" className="btn-link">Go to BMI Calculator</Link>
            </div>
            <div className="feature-card">
              <h3>Simple Counter</h3>
              <p>A basic counter to see how state works in React.</p>
              <Link to="/hello" className="btn-link">Try the Counter</Link>
            </div>
            <div className="feature-card">
              <h3>About Us</h3>
              <p>Learn more about this project and its purpose.</p>
              <Link to="/about" className="btn-link">Learn More</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;