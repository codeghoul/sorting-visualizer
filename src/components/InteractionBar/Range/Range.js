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
    onInput={props.changed}
    onChange={props.changed}
  />
);

export default range;
