import React from "react";
import { ProgressBar } from "./bars";
import { dataSet } from "./dataSet";

import "./style.css";

export const Skills: React.FC = () => {
  const [header] = React.useState({
    subHeader: "Skills",
    text: "Gain skills rest will come to you by itself",
  });

  return (
    <div className="skills">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>

        <div className="skillsrow bgMain">
          {dataSet.map((item) => (
            <ProgressBar
              key={item.id}
              skill={item.skill}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
