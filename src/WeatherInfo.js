import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row today">
        <div className="col-sm mt-2">
           <WeatherIcon code={props.data.icon} size={100}/>
        </div>

        <div className="col-sm mt-3">
          <WeatherTemperature celsius={props.data.temperature} />
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
