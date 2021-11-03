import React from "react";
import "./Weather.css";

export default function Weather() {
  
  return (
    <div className="Weather">
      <h1 className="City">London</h1>
      <h4> Nov 3 Wed, 15:26</h4>
     <form>
     <div className="row">
     <div className="col-7">
     <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" /> 
     </div>
      <div className="col-2">
     <button className="btn btn-outline-secondary" type="button">
            Search
            </button>
    </div>
    <div className="col-3">
     <button className="btn btn-outline-secondary" type="submit">
              Current
            </button>
    </div>
  </div>
</form>
       
          <div className="row today">
          <div className="col-2">
            <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="Cloudy" />
          </div>

          <div className="col-sm mt-3">
            <span className="temperature">21 </span>
            <span className="units">°C </span>
            <div className="description">Cloudy</div>
          </div>

          <div className="col-sm">
            <ul>
              <li>Humidity:87% </li>
              <li>Wind Speed:3m/s </li>
              <li>Cloudiness: 90%</li>
            </ul>
          </div>
        </div>
        </div>
  );
}
