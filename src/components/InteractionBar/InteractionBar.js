import React from "react";
import Button from "./Button/Button";
import classes from "./InteractionBar.module.css";

import * as constants from "../../constants/constants";

const interactionBar = props => {
  const options = [
    {
      sortType: constants.BUBBLE_SORT,
      displayName: "Bubble Sort"
    },
    {
      sortType: constants.SELECTION_SORT,
      displayName: "Selection Sort"
    },
    {
      sortType: constants.INSERTION_SORT,
      displayName: "Insertion Sort"
    }
  ];
  return (
    <div className={classes.InteractionBar}>
      <Button clicked={props.reset}>Reset</Button>
      <Button clicked={() => props.changeSortType(constants.BUBBLE_SORT)}>
        Bubble Sort
      </Button>
      <Button clicked={() => props.changeSortType(constants.INSERTION_SORT)}>
        Insertion Sort
      </Button>
      <Button clicked={() => props.changeSortType(constants.SELECTION_SORT)}>
        Selection Sort
      </Button>
      <Button clicked={props.commence}>Commence Sort!</Button>
    </div>
  );
};

export default interactionBar;
