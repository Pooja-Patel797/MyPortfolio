import React, { useEffect } from "react";
import { HeaderSection } from "../common";
import { introdata, intro } from "../../data";
import image from "../../images/man-01.png";
import Aos from "aos";

import "./style.css";

export const AboutMe: React.FC = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "A web enthusiast,meditator and music lover.",
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="aboutMe" className="about">
      <div data-aos="fade-up" className="about__container">
        <HeaderSection subHeader={header.subHeader} text={header.text} />
        <div className="about__container__flex  h-650 alignCenter">
          <div className="about__container__flex__box">
            <div data-aos="fade-right" className="about__img">
              <img src={image} alt="man" />
            </div>
          </div>
          <div className="about__container__flex__box">
            <div data-aos="fade-left" className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">{intro["about__info-p1"]}</div>
              <div className="about__info-p2">{intro["about__info-p2"]}</div>
              <div className="info__contacts">
                <div className="container__flex">
                  {introdata.map((info) => (
                    <div key={info.id} className="about__container__flex__box">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                      <br />
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
