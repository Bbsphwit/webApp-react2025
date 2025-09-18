import React, { useRef, useState } from "react";
import "./Bmi.css"; // Import the CSS file for styling

// Component to display the BMI status
function BmiText({ bmi }) {
  if (bmi === 0) {
    return null;
  }
  if (bmi < 18.5) {
    return <h1 className="status-underweight">Underweight</h1>;
  }
  if (bmi < 23) {
    // Corrected range for Normal weight (Thai standard)
    return <h1 className="status-normal">Normal weight</h1>;
  }
  if (bmi < 25) {
    // Corrected range for Overweight (Thai standard)
    return <h1 className="status-overweight">Overweight</h1>;
  }
  if (bmi < 30) {
    // Corrected range for Obesity (Thai standard)
    return <h1 className="status-obesity">Obesity</h1>;
  }
  return <h1 className="status-severe-obesity">Severe obesity</h1>;
}

export default function Bmi() {
  const W_InputRef = useRef(null);
  const H_InputRef = useRef(null);
  const [bmi, setBmi] = useState(0.0);

  function calculateBmi() {
    let weight = parseFloat(W_InputRef.current.value);
    let heightCm = parseFloat(H_InputRef.current.value);
    if (!weight || !heightCm) {
      alert("Please enter both weight and height.");
      return;
    }
    let heightM = heightCm / 100;
    let bmiValue = weight / (heightM * heightM);
    setBmi(bmiValue);
  }

  return (
    <div className="bmi-container">
      <div className="bmi-input-group">
        <label>Weight (kg):</label>
        <input ref={W_InputRef} type="number" placeholder="e.g., 70" />
      </div>
      <div className="bmi-input-group">
        <label>Height (cm):</label>
        <input ref={H_InputRef} type="number" placeholder="e.g., 175" />
      </div>
      <button className="bmi-button" onClick={calculateBmi}>
        Calculate
      </button>
      <div className="bmi-result">
        <p className="bmi-value">BMI: {bmi.toFixed(2)}</p>
        <BmiText bmi={bmi} />
      </div>
    </div>
  );
}
