import React, { useState } from "react";
import "./Bmi.css";

// A dedicated component for displaying the BMI status
function BmiStatus({ bmi }) {
  if (bmi === 0) {
    return null;
  }

  let statusText = "Obese (Class II)";
  let statusClass = "status-obesity-2";

  if (bmi < 18.5) {
    statusText = "Underweight";
    statusClass = "status-underweight";
  } else if (bmi < 25) {
    statusText = "Normal weight";
    statusClass = "status-normal";
  } else if (bmi < 30) {
    statusText = "Overweight";
    statusClass = "status-overweight";
  } else if (bmi < 35) {
    statusText = "Obese (Class I)";
    statusClass = "status-obesity-1";
  } else if (bmi >= 35) {
    statusText = "Obese (Class II)";
    statusClass = "status-obesity-2";
  }

  return <h2 className={statusClass}>{statusText}</h2>;
}

export default function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [error, setError] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();
    setError("");

    if (!weight || !height) {
      setError("Please enter a value for both weight and height.");
      return;
    }

    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);

    if (isNaN(parsedWeight) || isNaN(parsedHeight) || parsedWeight <= 0 || parsedHeight <= 0) {
      setError("Input must be positive numbers.");
      return;
    }

    const heightM = parsedHeight / 100;
    const bmiValue = parsedWeight / (heightM * heightM);
    setBmi(bmiValue);
  };

  return (
    <div className="app-container">
      <div className="bmi-card">
        <h1 className="title">BMI Calculator</h1>
        <form onSubmit={handleCalculate}>
          <div className="input-group">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g., 70"
            />
          </div>
          <div className="input-group">
            <label htmlFor="height">Height (cm)</label>
            <input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g., 175"
            />
          </div>
          <button type="submit" className="calculate-btn">Calculate BMI</button>
        </form>

        {error && <p className="error-message">{error}</p>}
        
        {bmi > 0 && (
          <div className="result-container">
            <p className="bmi-value">Your BMI: {bmi.toFixed(2)}</p>
            <BmiStatus bmi={bmi} />
          </div>
        )}
      </div>
    </div>
  );
}