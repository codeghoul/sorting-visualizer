import React from "react";
import Button from "./Button/Button";
import Range from "./Range/Range";
// import classes from "./InteractionBar.module.css";

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
    },
    {
      sortType: constants.MERGE_SORT,
      displayName: "Merge Sort",
      animationSpeed: 50
    },
    {
      sortType: constants.QUICK_SORT,
      displayName: "Quick Sort",
      animationSpeed: 50
    }
  ];
  return (
    <div className="w-11/12 p-4 flex flex-col flex-shrink">
      <div className="">
        <Button clicked={props.reset}>Reset</Button>
        <Range
          min="5"
          max="255"
          default={props.barCount}
          changed={event => props.changeBarCount(event.target.value)}
        />
        <Button clicked={props.commence}>Commence Sort!</Button>
      </div>
      <div className="">
        {sortDetails.map(sortDetail => (
          <Button
            disabled={sortDetail.sortType !== props.sortDetail.sortType}
            key={sortDetail.sortType}
            clicked={() => props.changeSortDetail(sortDetail)}
          >
            {sortDetail.displayName}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default interactionBar;
