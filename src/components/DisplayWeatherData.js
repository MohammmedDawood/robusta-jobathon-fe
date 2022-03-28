import React from "react";
import "./DisplayWeatherData.css";
const DisplayWeatherData = ({
  temperature,
  description,
  location,
  region,
  country,
  wind_speed,
  pressure,
  precip,
  humidity,
  img,
}) => {
  return (
    <div className="container expand-lg bg-transparent mt-md-5 text-white  ">
      <div className="row mt-md-5 mb-md-5">
        <div className="col-md-8  mr-2">
          <h1>{location}</h1>
          <p>
            {region} , {country}
          </p>
          <p>{new Date().toLocaleDateString()}</p>
          <p>
            {" "}
            <img src={img} alt="weather img" className="ml-md-5" />
          </p>
        </div>
        <div className="col-md-4">
          <h1 className="temp-degree">
            {temperature}
            <sup>o</sup>
          </h1>
          <p className="text-summary">{description}</p>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-md-3 weather-info">
          <h3 className="wind">Wind Speed </h3>
          <h2>{wind_speed}</h2>
        </div>
        <div className="col-md-3 weather-info ">
          <h3 className="pressure">Pressure</h3>
          <h2>{pressure}</h2>
        </div>
        <div className="col-md-3 weather-info ">
          <h3 className="precipitation">Precipitation</h3>
          <h2>{precip}</h2>
        </div>
        <div className="col-md-3 weather-info ">
          <h3 className="humidity">Humidity</h3>
          <h2>{humidity}</h2>
        </div>
      </div>
    </div>
  );
};

export default DisplayWeatherData;
