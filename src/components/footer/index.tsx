import React from "react";
import { HeaderSection } from "../common";
import "./style.css";
import {
  FaGoogle,
  FaLinkedin,
  FaGithub,
  FaHackerrank,
  FaMedium,
  FaGit,
} from "react-icons/fa";
export const Footer = () => {
  const [header] = React.useState({
    subHeader: "Contact Me",
    text: " Its never too late.Learning is never ending process.Keep Learning.",
  });
  return (
    <div className="about">
      <div className="container">
        <HeaderSection subHeader={header.subHeader} text={header.text} />
        <div className="row justifyConter">
          <div className="col-6">
            <ul className="contactCircles">
              <a href="mailto:patelpooja126018@gmail.com">
                <li>
                  <FaGoogle className="contactIcon" />
                </li>
              </a>

              <a href="https://www.linkedin.com/in/pooja-p-188031182/">
                <li>
                  <FaLinkedin className="contactIcon" />
                </li>
              </a>
              <a href="https://www.hackerrank.com/patelpooja126018">
                {" "}
                <li>
                  <FaHackerrank className="contactIcon" />
                </li>
              </a>
              <a href="https://github.com/Pooja-Patel797">
                <li>
                  <FaGithub className="contactIcon" />
                </li>
              </a>
              <a href="https://medium.com/@patelpooja126018">
                <li>
                  <FaMedium className="contactIcon" />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
