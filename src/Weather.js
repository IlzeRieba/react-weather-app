import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";



export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState( {ready: false});
const [city , setCity] = useState(props.defaultCity);
    function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
}

function search() {
const apiKey = "9860ec3dfdc6dad49e4f6a4e8c42cfa9";
const units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search();
}

function handleCityChange(event){
setCity(event.target.value);
}


if (weatherData.ready) {
return (
  <div className="Weather">
    <form onSubmit={handleSubmit}>
      <div class="row">
        <div class="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
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

    <WeatherInfo data={weatherData} />
    <WeatherForecast coordinates={weatherData.coordinates}/>
  </div>
);
    
} else {
search();
return "Loading...";
}

}
