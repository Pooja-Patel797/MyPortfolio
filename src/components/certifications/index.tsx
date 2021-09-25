import React, { useEffect } from "react";
import Aos from "aos";
import { certdata } from "../../data";
import { HeaderSection } from "../common";
import "./style.css";

export const Certificates: React.FC = () => {
  const [header] = React.useState({
    subHeader: "My Certifications",
    text: "Keep Learning...",
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="certificates" className="blogs">
      <div data-aos="fade-up" className="blogs__container">
        <div className="blogs__header">
          <HeaderSection subHeader={header.subHeader} text={header.text} />

          <div className="container__flex base">
            {certdata.map((info, key) => (
              <div
                key={key}
                data-aos="flip-left"
                className="container__flex__box base"
              >
                <div className="blogs__box">
                  <br />
                  <div className="blogs__box-header"> {info.heading}</div>

                  <img
                    className="blogs__box-image"
                    src={info.image}
                    alt={info.description}
                  />

                  <a href={info.url}>
                    <div className="blogs__box-p">{info.text}</div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
