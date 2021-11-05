import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Nov 3 Wed, 15:26",
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      cloudiness: response.data.clouds.all,
      iconUrl: `http://openweathermap.org/img/wn/04n@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1 className="City">{weatherData.city}</h1>
        <h4>{weatherData.date} </h4>
        <form>
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
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
          <div className="col-sm">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
          </div>

          <div className="col-sm mt-3">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">°C </span>
            <div className="text-capitalize description">
              {weatherData.description}
            </div>
          </div>

          <div className="col-sm">
            <ul>
              <li>
                <i class="fas fa-tint"></i>:{weatherData.humidity}%{" "}
              </li>
              <li>
                <i class="fas fa-wind"></i>:{Math.round(weatherData.wind)}m/s{" "}
              </li>
              <li>
                <i class="fas fa-cloud"></i>:{weatherData.cloudiness}%
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b9fac5b7867d92c6116e9a9597d98187";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
