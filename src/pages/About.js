import React from "react";
import "../styles/global.css";
import "../styles/about.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import lucasimg from "../assets/lucasimg.jpg";
import SideBar from "../components/Sidebar";

const About = () => {
  return (
    <div id="container">
      {" "}
      <SideBar />
      <div id="page-about">
        <main>
          <div className="about-content-wrapper">
            <img src={lucasimg} alt="LucasCampelo" />
            <h2>Desenvolvido por Lucas Campelo</h2>
            <p>Contato: dvlucascampelo@gmail.com</p>

            <div id="profilelinks">
              <a
                href="https://github.com/dlucascampelo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={50} color="#171515" />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-campelo-858562186/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={50} color="#0b5e86" />
              </a>
              <a
                href="https://www.instagram.com/dlucascampelo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={50} color="rgba(225,48, 108)" />
              </a>
            </div>

            <div id="site-info">
              <span>
                <hr />
                Esse é um projeto desenvolvido como um teste pra uma vaga de
                estágio. Para mais informações, visite o projeto no{" "}
                <a
                  id="gitlink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href=" https://github.com/dlucascampelo/weatherApp"
                >
                  GitHub
                </a>
                !
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
