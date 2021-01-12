import React, { useEffect } from "react";
import { HeaderSection } from "../common";
import { introdata, intro } from "../../data";
import { FaGrin } from "react-icons/fa";
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
      <div data-aos="fade-up" className="about__container ">
        <HeaderSection subHeader={header.subHeader} text={header.text} />
        <div className="about__container__flex ">
          <div className="about__info">
            <h1 className="title ">
              Hi There <FaGrin />
            </h1>
            <div className="about__info-p1">
              <p>{intro["about__info-p1"]}</p>
            </div>
            <div className="about__info-p2">
              <p>{intro["about__info-p2"]}</p>
            </div>
            <br />
            <div className="info__contacts">
              <div className="container__grid">
                {introdata.map((info) => (
                  <div key={info.id} className="about__container__flex__box">
                    <strong className="title">{info.title}</strong>
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
  );
};
