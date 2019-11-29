import React from "react";
import classes from "./Button.module.css";

const button = props => (
  <div className={[classes.Button, classes.Button3].join(" ")} onClick={props.clicked}>
    {props.children}
  </div>
);

export default button;
