import React from "react";
import "./index.css";
import "../../styles/global.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
const SideBar = () => {
  return (
    <div id="container">
      <aside className="sidebar">
        <nav className="nav">
          <img src={logo} alt="" srcset="" />
          <ul>
            <li className="active">
              <Link to="/" className="enter-about">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="enter-about">
                Buscas favoritas
              </Link>
            </li>
            <li>
              <Link to="/" className="enter-about">
                Buscas reecntes
              </Link>
            </li>
            <li>
              <Link to="/about" className="enter-about">
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
