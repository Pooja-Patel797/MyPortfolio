import React from "react";
import { HeaderSection } from "../common";
import { introdata, intro } from "../../data";
import image from "../../images/man-01.png";
import "./style.css";

export const AboutMe: React.FC = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "A web enthusiast,meditator and music lover.",
  });

  return (
    <div className="about">
      <div className="container">
        <HeaderSection subHeader={header.subHeader} text={header.text} />
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={image} alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">{intro["about__info-p1"]}</div>
              <div className="about__info-p2">{intro["about__info-p2"]}</div>
              <div className="info__contacts">
                <div className="row">
                  {introdata.map((info) => (
                    <div key={info.id} className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
