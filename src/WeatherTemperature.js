import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="temperature">
        {Math.round(props.celsius)}{" "}
        <span className="unit">
          <span className="active">°C </span>
          <a href="/" className="nonactive" onClick={showFahrenheit}>
            | F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="temperature">
        {Math.round(fahrenheit)}{" "}
        <span className="unit">
          <span className="active">°F </span>
          <a href="/" className="nonactive" onClick={showCelsius}>
            | C
          </a>
        </span>
      </span>
    );
  }
}
