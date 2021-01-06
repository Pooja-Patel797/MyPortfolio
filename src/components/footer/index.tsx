import React from "react";
import { HeaderSection } from "../common";
import "./style.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
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
              <li>
                <FaFacebookF className="contactIcon" />
              </li>
              <li>
                <FaTwitter className="contactIcon" />
              </li>
              <li>
                <FaPinterest className="contactIcon" />
              </li>
              <li>
                <FaInstagram className="contactIcon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
