import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "9860ec3dfdc6dad49e4f6a4e8c42cfa9";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day mb-2">Mon</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures mt-2">
            <span className="WeatherForecast-temperature-max">20°</span>
            <span className="WeatherForecast-temperature-min ms-2">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
