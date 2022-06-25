import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "./FormattedDate";
import FormattedDate from "./FormattedDate";




export default function Weather(props) {
    const [weatherData, setWeatherData] = useState( {ready: false});
function handleResponse(response){
    console.log(response.data);
    setWeatherData({
        ready:true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
}

if (weatherData.ready) {
return (
  <div className="Weather">
    <form>
      <div class="row">
        <div class="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
          />
        </div>
        <div class="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>

    <h1>{weatherData.city}</h1>
    <ul>
      <li>
       <FormattedDate  date={weatherData.date}/>
      </li>
      <li className="text-capitalize">{weatherData.description}</li>
    </ul>

    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            className="float-left"
          />
          <span className="currentTemperature">
            {" "}
            {Math.round(weatherData.temperature)}
          </span>{" "}
          <span className="unit"> °C </span>
        </div>
      </div>

      <div className="col-6">
        <ul>
          <li>Humidity: {weatherData.humidity} % </li>
          <li>Wind: {Math.round(weatherData.wind)} km/h</li>
        </ul>
      </div>
    </div>
  </div>
);
    
} else {
const apiKey = "9860ec3dfdc6dad49e4f6a4e8c42cfa9";
const units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(handleResponse);

return "Loading...";
}

}
