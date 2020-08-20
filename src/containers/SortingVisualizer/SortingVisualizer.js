import React from "react";

import BarsContainer from "../../components/BarsContainer";

import * as constants from "../../constants/constants";
import getAnimations, { getRandomNumbers } from "../../helpers";
import InteractionBar from "../../components/InteractionBar/InteractionBar";

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortDetails: {
        sortType: constants.BUBBLE_SORT,
        displayName: "Bubble Sort",
        animationSpeed: 50,
      },
      numbers: getRandomNumbers(55),
      barCount: 55,
      animationId: undefined,
      animations: [],
    };
  }

  handleSortDetailsChange = (sortDetails) => {
    this.handleReset(sortDetails);
  };

  handleCommenceSort = () => {
    if (this.state.animationId !== undefined) {
      return;
    }

    if (this.state.animations === null || this.state.animations.length === 0) {
      return;
    }

    this.animate();
  };

  animate = (i = 0) => {
    if (i < this.state.animations.length) {
      this.handleSwap(this.state.animations[i]);
      this.setState({
        animationId: requestAnimationFrame(() => this.animate(i + 1)),
      });
    }
  };

  handleSwap = (indices) => {
    const newNumbers = this.state.numbers.slice();
    const number = newNumbers[indices[0]];
    newNumbers[indices[0]] = newNumbers[indices[1]];
    newNumbers[indices[1]] = number;
    this.setState({ numbers: newNumbers });
  };

  handleReset = (sortDetails = this.state.sortDetails) => {
    cancelAnimationFrame(this.state.animationId);
    const newNumbers = getRandomNumbers(this.state.barCount);
    const animations = getAnimations(sortDetails.sortType, newNumbers.slice());
    this.setState({
      sortDetails: sortDetails,
      animationId: undefined,
      numbers: newNumbers,
      animations: animations,
    });
  };

  handleBarCountChange = (barCount) => {
    const newNumbers = getRandomNumbers(barCount);
    this.setState({ numbers: newNumbers, barCount: barCount });
  };

  render() {
    return (
      <div className="flex flex-col items-center w-full h-screen">
        <BarsContainer numbers={this.state.numbers} />
        <InteractionBar
          barCount={this.state.barCount}
          reset={() => this.handleReset()}
          commence={() => this.handleCommenceSort()}
          changeSortDetail={(sortDetails) =>
            this.handleSortDetailsChange(sortDetails)
          }
          changeBarCount={(value) => this.handleBarCountChange(value)}
          sortDetail={this.state.sortDetails}
        />
      </div>
    );
  }
}

export default SortingVisualizer;
