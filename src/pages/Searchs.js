import React, { useState, useEffect } from "react";
import "../styles/global.css";
import "../styles/searchs.css";

import Sidebar from "../components/Sidebar";

const Searchs = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    let storageValidation = localStorage.getItem("forecastWeather");
    if (storageValidation) {
      setHistory(JSON.parse(storageValidation).recent);
    }
  }, []);

  const historySearch = history.map((recent) => (
    <li>
      <p>
        {recent.location.name} {""}
        {recent.weather.temperature}º
      </p>
    </li>
  ));
  const NoHistory = () => (
    <p className="no-history" text-align="center">
      Você ainda não possui uma busca!
    </p>
  );

  return (
    <div className="Container">
      <Sidebar />
      <div className="searchsContainer">
        <section id="historyField">
          <h1>histórico de buscas</h1>
          <hr />
          <div className="weatherData">
            <ul>{history.length <= 0 ? <NoHistory /> : historySearch}</ul>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Searchs;
