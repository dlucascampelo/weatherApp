import React from "react";
import "../../styles/global.css";
import "./index.css";

const WeatherData = ({ weather, location }) => {
  const { temperature, humidity, wind_speed } = weather;
  const { name } = location;
  return (
    <div className="weatherContainer">
      <p className="title">
        Tempo agora em
        <span className="currentLocation"> {name}</span>
      </p>
      <div className="dataContainer">
        <span className="weatherData">
          <p className="dataType">Temperatura</p>
          <p className="dataValue">{temperature}º</p>
        </span>
        <span className="weatherData">
          <p className="dataType">Humidade</p>
          <p className="dataValue">{humidity}%</p>
        </span>
        <span className="weatherData">
          <p className="dataType">Velocidade do vento</p>
          <p className="dataValue">{wind_speed}km/h</p>
        </span>
      </div>
    </div>
  );
};

export default WeatherData;
