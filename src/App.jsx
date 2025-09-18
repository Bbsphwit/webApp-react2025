import "./App.css";
import Bmi from "./Bmi";
import Hello from "./Count"; // This import seems to be a mismatch. You have a Hello component and a Count component.
import List from "./List";
import About from "./About";
import Home from "./Home";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <h1>My React App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/hello">Counter</Link>
            </li>
            <li>
              <Link to="/bmi">BMI Calculator</Link>
            </li>
            <li>
              <Link to="/list">List Example</Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
      <div className="content">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/list" element={<List />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
