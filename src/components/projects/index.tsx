import React, { useEffect } from "react";
import { projectdata } from "../../data";
import { FaCertificate } from "react-icons/fa";
import { HeaderSection } from "../common";
import Aos from "aos";

import "./style.css";
export const Projects: React.FC = () => {
  const [header] = React.useState({
    subHeader: "My Projects",
    text: "The journey of building something teaches you a lot.",
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="projects" className="projects">
      <div data-aos="fade-up" className="projects__container">
        <div className="projects__header">
          <HeaderSection subHeader={header.subHeader} text={header.text} />

          <div className="projects__container__flex base">
            {projectdata.map((info, key) => (
              <div key={key} className="projects__container__flex__box base">
                <div data-aos="zoom-in" className="projects__box">
                  <FaCertificate className="commonIcons" />
                  <div className="projects__box-header"> {info.heading}</div>
                  <div className="projects__box-p">
                    <h5 className="projects__box-p-subheading">
                      Description :
                    </h5>
                    {info.text}
                  </div>

                  <div className="projects__box-p">
                    {" "}
                    <h5 className="projects__box-p-subheading">
                      Technologies used :
                    </h5>
                    {info.technology}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
