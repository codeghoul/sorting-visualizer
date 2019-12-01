import React from "react";
import classes from "./Button.module.css";

const button = props => {
  const allClasses = [classes.Button];
  if (props.disabled) {
    allClasses.push(classes.Disabled);
  } else {
    allClasses.push(classes.Button3);
  }
  return (
    <div className={allClasses.join(" ")} onClick={props.clicked}>
      {props.children}
    </div>
  );
};

export default button;
