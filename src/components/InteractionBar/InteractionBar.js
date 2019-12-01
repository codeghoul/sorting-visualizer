import React from "react";
import Button from "./Button/Button";
import Range from "./Range/Range";
import classes from "./InteractionBar.module.css";

import * as constants from "../../constants/constants";

const interactionBar = props => {
  const sortDetails = [
    {
      sortType: constants.BUBBLE_SORT,
      displayName: "Bubble Sort",
      animationSpeed: 50
    },
    {
      sortType: constants.SELECTION_SORT,
      displayName: "Selection Sort",
      animationSpeed: 50
    },
    {
      sortType: constants.INSERTION_SORT,
      displayName: "Insertion Sort",
      animationSpeed: 50
    }
  ];
  return (
    <div className={classes.InteractionBar}>
      <Button clicked={props.reset}>Reset</Button>
      <Range
        min="5"
        max="300"
        default={props.barCount}
        changed={event => props.changeBarCount(event.target.value)}
      />
      {sortDetails.map(sortDetail => (
        <Button
          key={sortDetail.sortType}
          clicked={() => props.changeSortDetail(sortDetail)}
        >
          {sortDetail.displayName}
        </Button>
      ))}
      <Button clicked={props.commence}>Commence Sort!</Button>
    </div>
  );
};

export default interactionBar;
