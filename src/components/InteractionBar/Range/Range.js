import React from "react";
import classes from "./Range.module.css";

const range = props => (
  <input
    type="range"
    name="range"
    className={classes.Range}
    value={props.default}
    min={props.min}
    max={props.max}
    onChange={props.changed}
    step={50}
  />
);

export default range;
