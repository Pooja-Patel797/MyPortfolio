import React, { useEffect } from "react";
import Aos from "aos";
import { blogdata } from "../../data";

import { HeaderSection } from "../common";
import "./style.css";
export const Blogs = () => {
  const [header] = React.useState({
    subHeader: "My Blogs",
    text: "Learn,Write and Share",
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="blogs" className="blogs">
      <div data-aos="fade-up" className="container">
        <div className="blogs__header">
          <HeaderSection subHeader={header.subHeader} text={header.text} />

          <div className="row bgMain">
            {blogdata.map((info) => (
              <div data-aos="zoom-in" className="col-4 bgMain">
                <div className="blogs__box">
                  <br />
                  <div className="blogs__box-header"> {info.heading}</div>

                  <img className="blogs__box-image" src={info.image} />

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
