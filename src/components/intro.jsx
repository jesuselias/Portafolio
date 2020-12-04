import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import styled from "styled-components"
import logo1 from "../img/foto-perfil-3.png";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #56afc4;
`;

const Img = styled.img`
  width:200px;
  height:200px;
`;

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
            <div className="image">
                        <Img src={logo1} />
                    </div>
              <h2 className="intro-title xs-4">Hello, I am Jesus Elias</h2>
              <Title>Informatics Engineer</Title>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
