import React, { useState } from "react";

import BarsContainer from "../../components/BarsContainer/BarsContainer";

import classes from "./SortingVisualizer.module.css";

import * as constants from "../../constants/constants";
import getAnimations from "../../helpers/sortingHelper";
import InteractionBar from "../../components/InteractionBar/InteractionBar";

const SortingVisualizer = () => {
  const [sortDetails, setSortDetails] = useState({
    sortType: constants.BUBBLE_SORT,
    displayName: "Bubble Sort",
    animationSpeed: 50,
  });

  const [numbers, setNumbers] = useState(getRandomNumbers(55));

  const [barCount, setBarCount] = useState(55);

  const [animationId, setAnimationId] = useState(undefined);

  const handleSortDetailsChange = (sortDetails) => {
    handleReset();
    setSortDetails(sortDetails);
  };

  const handleCommenceSort = () => {
    const animations = getAnimations(sortDetails.sortType, numbers.slice());

    if (animations === null || animations.length === 0) {
      return;
    }

    let i = 0;

    const animate = () => {
      handleSwap(animations[i++]);
      if (i < animations.length) {
        setAnimationId(requestAnimationFrame(animate));
      }
    };

    const handleSwap = (indices) => {
      setNumbers((numbers) => {
        const newNumbers = numbers.slice();
        const number = newNumbers[indices[0]];
        newNumbers[indices[0]] = newNumbers[indices[1]];
        newNumbers[indices[1]] = number;
        return newNumbers;
      });
    };

    setAnimationId(requestAnimationFrame(animate));
  };

  const handleReset = () => {
    const newNumbers = getRandomNumbers(barCount);
    cancelAnimationFrame(animationId);
    setAnimationId(undefined);
    setNumbers(newNumbers);
  };

  const handleBarCountChange = (barCount) => {
    const newNumbers = getRandomNumbers(barCount);
    setBarCount(barCount);
    setNumbers(newNumbers);
  };

  return (
    <div className={classes.SortingVisualizer}>
      <BarsContainer numbers={numbers} />
      <InteractionBar
        barCount={barCount}
        reset={() => handleReset()}
        commence={() => handleCommenceSort()}
        changeSortDetail={(sortDetails) => handleSortDetailsChange(sortDetails)}
        changeBarCount={(value) => handleBarCountChange(value)}
        sortDetail={sortDetails}
      />
    </div>
  );
};

const getRandomNumbers = (count) => {
  let numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(getRandomInt(20, 599));
  }
  return numbers;
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default SortingVisualizer;
