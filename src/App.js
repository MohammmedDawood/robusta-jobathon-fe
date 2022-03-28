import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import DisplayWeatherData from "./components/DisplayWeatherData";

function App() {
  const [location, setLocation] = useState({
    latitude: 30.033333,
    longitude: 31.233334,
  });
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    // get current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setLocation(newLocation);
        getWeatherData(newLocation.latitude, newLocation.longitude, "");
      });
    } else {
      console.log("this is the weather of Egypt");
      getWeatherData(location.latitude, location.longitude, "");
    }
  }, []);
  const convertWeatherData = (value, type = "C") => {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
    let FTemp = 0;
    let CTemp = 0;
    // console.log(weatherData.temperature, type);
    if (weatherData.temperature) {
      if (type === "C") {
        CTemp = ((weatherData.temperature * 9) / 5 + 32).toFixed(0);
        setWeatherData({ ...weatherData, temperature: CTemp });
      } else {
        FTemp = ((weatherData.temperature - 32) * (5 / 9)).toFixed(0);
        setWeatherData({ ...weatherData, temperature: FTemp });
      }
    } else {
      CTemp = null;
      FTemp = null;
    }
    // setWeatherData({...weatherData,temperature: CTemp, FTemp});
  };
  const getWeatherData = async (latitude, longitude, city) => {
    try {
      const res = await axios.get(
        // use given URL
        // "https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/" +
        // latitude +
        // "," +
        // longitude
        // I have used api.weatherstack.com to get location of the city
        "http://api.weatherstack.com/current?access_key=bf2b707476d4c8723f959fe1e07005c4&query=" +
          city +
          latitude +
          "," +
          longitude
      );
      const data = res.data;
      // console.log(res);
      // console.log(res.data);
      setWeatherData({
        temperature: data.current.temperature,
        description: data.current.weather_descriptions[0],
        location: data.location.name,
        region: data.location.region,
        country: data.location.country,
        wind_speed: data.current.wind_speed,
        pressure: data.current.pressure,
        precip: data.current.precip,
        humidity: data.current.humidity,
        img: data.current.weather_icons,
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="container ">
      <Header
        currenttemp={weatherData.temperature}
        convertWeatherData={convertWeatherData}
      />
      <DisplayWeatherData {...weatherData} />
    </div>
  );
}

export default App;
