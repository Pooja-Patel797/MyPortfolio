import React from "react";
import { HeaderSection } from "../common";
import { ProgressBar } from "./bars";
import { skilldata } from "../../data";

import "./style.css";

export const Skills: React.FC = () => {
  const [header] = React.useState({
    subHeader: "Skills",
    text: "Gain skills rest will come to you by itself",
  });

  return (
    <div className="skills">
      <div className="container">
        <HeaderSection subHeader={header.subHeader} text={header.text} />
        <div className="skillsrow bgMain">
          {skilldata.map((item) => (
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
