import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row today">
        <div className="col-sm">
          <img src={props.data.iconUrl} alt={props.data.description} />
        </div>

        <div className="col-sm mt-3">
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">°C </span>
          <div className="text-capitalize description">
            {props.data.description}
          </div>
        </div>

        <div className="col-sm">
          <ul>
            <li>
              <i className="fas fa-tint"></i>:{props.data.humidity}%
            </li>
            <li>
              <i className="fas fa-wind"></i>:{Math.round(props.data.wind)}
              m/s
            </li>
            <li>
              <i className="fas fa-cloud"></i>:{props.data.cloudiness}%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
