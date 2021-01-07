import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import logo from "../../images/logo.png";
import "./style.css";

export const Header: React.FC = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src={logo} alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Me</a>
              </li>
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Projects</a>
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
                <a href="">Contact</a>
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
