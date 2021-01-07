import React, { useEffect } from "react";
import { projectdata } from "../../data";
import { FaCertificate } from "react-icons/fa";
import { HeaderSection } from "../common";
import Aos from "aos";

import "./style.css";
export const Projects = () => {
  const [header] = React.useState({
    subHeader: "My Projects",
    text: "The journey of building something teaches you a lot.",
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="projects" className="services">
      <div data-aos="fade-up" className="container">
        <div className="services__header">
          <HeaderSection subHeader={header.subHeader} text={header.text} />

          <div className="row bgMain">
            {projectdata.map((info) => (
              <div className="col-4 bgMain">
                <div data-aos="zoom-in" className="services__box">
                  <FaCertificate className="commonIcons" />
                  <div className="services__box-header"> {info.heading}</div>
                  <div className="services__box-p">
                    <h5 className="services__box-p-subheading">
                      Description :
                    </h5>
                    {info.text}
                  </div>

                  <div className="services__box-p">
                    {" "}
                    <h5 className="services__box-p-subheading">
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
