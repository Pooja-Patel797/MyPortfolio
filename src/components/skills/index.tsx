import React, { useEffect, useState } from "react";
import { HeaderSection } from "../common";
import { ProgressBar } from "./bars/progressBar";
import { skilldata } from "../../data";
import Aos from "aos";

import "./style.css";

export const Skills: React.FC = () => {
  const [completed, setCompleted] = useState(0);

  const [header] = React.useState({
    subHeader: "Skills",
    text: "Gain skills rest will come to you by itself",
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="skills" className="skills">
      <div data-aos="fade-up" className="skills__container">
        <HeaderSection subHeader={header.subHeader} text={header.text} />
        <div className="skillsrow base">
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
