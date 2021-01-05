import React from "react";
import Lottie from "react-lottie";
import { coder, meditation, music } from "../../animationLotties";
import "./style.css";

export const Home: React.FC = () => {
  const [state] = React.useState({
    title: "I am Pooja Patel",
    text:
      "I am a web developer with interest in solving real life problems and building highly scalable products. ",
    image: "/images/man-01.png",
  });
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <h1>{state.title}</h1>
                <p>{state.text}</p>

                <ul className="header__ul">
                  <li>
                    <div>
                      <Lottie options={coder} height={70} width={70} />
                    </div>

                    <p>Coding</p>
                  </li>

                  <li>
                    <div>
                      <Lottie options={meditation} height={70} width={70} />
                    </div>
                    <p> Meditation</p>
                  </li>

                  <li>
                    <div>
                      <Lottie options={music} height={70} width={70} />
                    </div>
                    <p>Music</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
