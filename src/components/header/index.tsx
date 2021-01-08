import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import logo from "../../images/logo.png";

import { Link } from "react-scroll";
import "./style.css";

export const Header: React.FC = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="header">
      <div className="wrapper">
        <div className="header__container">
          <ul className="header__left">
            <div className="header__left-logo">
              <img src={logo} alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="header__right">
              <li>
                <Link to="home" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="aboutMe" spy={true} smooth={true}>
                  About Me
                </Link>
              </li>
              <li>
                <Link to="skills" spy={true} smooth={true}>
                  Skills
                </Link>
              </li>

              <li>
                <Link to="projects" spy={true} smooth={true}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="blogs" spy={true} smooth={true}>
                  Blogs
                </Link>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1o8szcJ0DHMkc4SlTnZQmQ1VsGyYSUzlcu3u8RetwuZo/edit?usp=sharing"
                  download
                >
                  Resume
                </a>
              </li>
              <li>
                <Link to="contactMe" spy={true} smooth={true}>
                  Contact
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};
