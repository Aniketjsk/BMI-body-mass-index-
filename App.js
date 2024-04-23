import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(180);

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight}</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <p className="slider-output">Height: {height}</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <div className="output-section">
          <p>Your BMI is</p>
          <p className="output">{((weight / height / height) * 703).toFixed(2)}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
