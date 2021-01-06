import React from "react";
import "./style.css";

interface IProps {
  subHeader: string;
  text: string;
}

export const HeaderSection: React.FC<IProps> = (props) => {
  return (
    <div className="common">
      <h1 className="mainHeader">{props.subHeader}</h1>
      <p className="mainContent">{props.text}</p>
      <div className="commonBorder"></div>
    </div>
  );
};
