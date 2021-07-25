import React, { useEffect } from "react";
import Lottie from "react-lottie";
import image from "../../images/home_img.jpg";
import Aos from "aos";

import { coder, meditation, music } from "../../animationLotties";
import "./style.css";

export const Home: React.FC = () => {
  const [state] = React.useState({
    title: "Hi, I am Pooja Patel",
    text:
      "I am a software developer with interest in solving real life problems and building highly scalable products. ",
    image: image,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="home" className="home">
      <div data-aos="fade-up" className="home__container">
        <div className="home__container__flex">
          <div className="home__container__flex__box">
            <div className="home__container__flex__box__content">
              <div className="home__container__flex__box__section">
                <h1>{state.title}</h1>
                <p>{state.text}</p>

                <ul
                  data-aos="zoom-out"
                  className="home__container__flex__box__ul"
                >
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
          <div data-aos="zoom-in" className="home__container__flex__box">
            <div className="home__img">
              <img src={state.image} alt="creative thinking home page image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
