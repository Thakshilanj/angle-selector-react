import React, { useState } from "react";

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);
  const presetAngles = [0, 45, 60, 90, 180];

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) value = 0;
    if (value < 0) value = 0;
    if (value > 360) value = 360;
    setAngle(value);
  };

  const handleSliderChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  const handleRadioChange = (value) => {
    setAngle(value);
  };

  return (
    <div>
      <input
        type="number"
        value={angle}
        onChange={handleInputChange}
        min="0"
        max="360"
      />
      <input
        type="range"
        value={angle}
        onChange={handleSliderChange}
        min="0"
        max="360"
      />
      <div>
        {presetAngles.map((preset) => (
          <label key={preset}>
            <input
              type="radio"
              name="presetAngle"
              value={preset}
              checked={angle === preset}
              onChange={() => handleRadioChange(preset)}
            />
            {preset}
          </label>
        ))}
      </div>
    </div>
  );
};

export default AngleSelector;
