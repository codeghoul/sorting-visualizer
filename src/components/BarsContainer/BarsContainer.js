import React from "react";
import Bar from "./Bar/Bar";

import classes from "./BarsContainer.module.css";

const barsContainer = props => (
  <div className={classes.BarsContainer}>
    {props.numbers.map((number, index) => (
      <Bar key={index} height={number}></Bar>
    ))}
  </div>
);

export default barsContainer;
