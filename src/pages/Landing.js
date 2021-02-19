import React, { useState } from "react";
import axios from "axios";

import { BiSearch } from "react-icons/bi";
import "../styles/global.css";
import "../styles/landing.css";

import Sidebar from "../components/Sidebar";
import WeatherData from "../components/WeatherData";

const Landing = () => {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();

  const apiCall = async (e) => {
    e.preventDefault();
    const location = [
      e.target.elements.locationCity.value,
      e.target.elements.locationCountry.value,
    ];

    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_KEY}&query=${location}`;
    const response = await axios.get(url);

    setWeather(response.data.current);
    setLocation(response.data.location);

    const recentWeather = { recent: [] };

    if (localStorage.getItem("forecastWeather")) {
      recentWeather.recent = JSON.parse(
        localStorage.getItem("forecastWeather")
      ).recent;
    }

    recentWeather.recent.push({
      weather: response.data.current,
      location: response.data.location,
    });

    localStorage.setItem("forecastWeather", JSON.stringify(recentWeather));
  };

  return (
    <div id="container">
      <Sidebar />

      <div className="weather">
        <div className="mainPage">
          <h2>Busque por um local</h2>

          <form onSubmit={apiCall}>
            <input
              name="locationCity"
              type="text"
              placeholder="Recife"
              required
            />
            <input
              name="locationCountry"
              type="text"
              placeholder="Brasil"
              required
            />
            <button type="submit">
              <BiSearch size={30} color="#fff" />
            </button>
          </form>
          {weather && location && (
            <WeatherData weather={weather} location={location} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
