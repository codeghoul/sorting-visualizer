import React, { Component } from "react";

import BarsContainer from "../../components/BarsContainer/BarsContainer";

import classes from "./SortingVisualizer.module.css";

import * as constants from "../../constants/constants";
import getAnimations from "../../helpers/sortingHelper";
import InteractionBar from "../../components/InteractionBar/InteractionBar";

class SortingVisualizer extends Component {
  state = {
    sortDetail: {
      sortType: constants.BUBBLE_SORT,
      displayName: "Bubble Sort",
      animationSpeed: 50
    },
    numbers: []
  };

  componentDidMount = () => {
    this.handleReset();
  };

  handleSortDetailChange = sortDetail => {
    this.setState({ ...this.state, sortDetail: sortDetail });
  };

  handleCommenceSort = () => {
    const animations = getAnimations(
      this.state.sortDetail.sortType,
      this.state.numbers.slice()
    );

    animations.map((animation, index) =>
      setTimeout(() => this.handleSwap(animation), (1000 / 60) * index)
    );
  };

  handleSwap = indices => {
    const newNumbers = this.state.numbers.slice();
    const number = newNumbers[indices[0]];
    newNumbers[indices[0]] = newNumbers[indices[1]];
    newNumbers[indices[1]] = number;
    this.setState({ ...this.state, numbers: newNumbers });
  };

  handleReset = () => {
    const newNumbers = getRandomNumbers();
    this.setState({ ...this.state, numbers: newNumbers });
  };

  render() {
    return (
      <div className={classes.SortingVisualizer}>
        <BarsContainer numbers={this.state.numbers} />
        <InteractionBar
          reset={() => this.handleReset()}
          commence={() => this.handleCommenceSort()}
          changeSortDetail={sortDetail =>
            this.handleSortDetailChange(sortDetail)
          }
          sortDetail={this.state.sortDetail}
        />
      </div>
    );
  }
}

const getRandomNumbers = () => {
  let numbers = [];
  for (let i = 0; i < constants.NUMBER_OF_ARRAY_BARS; i++) {
    numbers.push(getRandomInt(20, 599));
  }
  return numbers;
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default SortingVisualizer;
