import React from "react";
import Button from "./Button/Button";
import classes from "./InteractionBar.module.css";

import * as constants from "../../constants/constants";

const interactionBar = props => {
  return (
    <div className={classes.InteractionBar}>
      <Button clicked={props.reset}>Reset</Button>
      <Button clicked={() => props.changeSortType(constants.BUBBLE_SORT)}>Bubble Sort</Button>
      <Button clicked={() => props.changeSortType(constants.MERGE_SORT)}>Merge Sort</Button>
      <Button clicked={props.commence}>Commence Sort!</Button>
    </div>
  );
};

export default interactionBar;
