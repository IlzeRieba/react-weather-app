import React from "react";
import "./Weather.css";


export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div class="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>Seignosse</h1>
      <ul>
        <li>Friday 24th June 14:07</li>
        <li>Sunny</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="sunny icon"
          />
          <span className="currentTemperature"> 26</span> <span className="unit"> °C </span>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: 20%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
