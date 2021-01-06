import React from "react";
import "./style.css";

export const AboutMe: React.FC = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Pooja Patel" },
    { id: 2, title: "Email:", text: "patelpooja126018@gmail.com" },
    { id: 3, title: "Phone:", text: "8962569956" },
    { id: 4, title: "Linkedin", text: "xyz.linkedin" },
    { id: 5, title: "Date of Birth:", text: "7 Aug 1997" },
    { id: 6, title: "City", text: "Indore" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                I am a former intern at Ernst and Young GDS with keen interest
                in web application development.I have done masters in
                Information Technology.
              </div>
              <div className="about__info-p2">
                Apart from coding i am fond of doing meditation,yoga and love
                music.I also like net surfing and reading blogs.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div key={info.id} className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
