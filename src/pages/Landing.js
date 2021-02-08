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
    const location = e.target.elements.location.value;

    const url = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_KEY}&query=${location}`;
    const request = axios.get(url);
    const response = await request;

    setWeather(response.data.current);
    setLocation(response.data.location);
    console.log(response);
  };

  return (
    <div id="container">
      <Sidebar />

      <div className="weather">
        <div className="mainPage">
          <h2>Busque por uma cidade</h2>
          <form onSubmit={apiCall}>
            <input
              name="location"
              type="text"
              placeholder="Busque por uma cidade"
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
