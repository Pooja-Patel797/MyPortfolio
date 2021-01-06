import React from "react";

interface IProps {
  skill: string;
  bgcolor: string;
  completed: number;
}
export const ProgressBar: React.FC<IProps> = (props: IProps) => {
  const { skill, bgcolor, completed } = props;
  const wrapper = {
    height: "100%",
    width: "100%",
    color: "white",
    marginLeft: "12vw",
    marginTop: "2vw",
  };

  const containerStyles = {
    height: 20,
    width: "80%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 20,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right" as const,
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    //fontWeight: "bold",
  };

  return (
    <div style={wrapper}>
      <h5>{skill}</h5>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};
