import React from "react";
import { BiSearch } from "react-icons/bi";

import "../styles/landing.css";
import SideBar from "../components/Sidebar";

const Landing = () => {
  return (
    <div id="container">
      <SideBar />
      <div className="weather">
        <div className="mainPage">
          <h2>Busque por uma cidade</h2>
          <form>
            <input type="text" placeholder="Exemplo" />
            <button type="submit">
              <BiSearch size={30} color="#fff" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
