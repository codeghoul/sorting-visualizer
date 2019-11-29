import React, { Component } from "react";
import { connect } from "react-redux";

import BarsContainer from "../../components/BarsContainer/BarsContainer";

import classes from "./SortingVisualizer.module.css";

import * as actions from "../../store/actions/actions";
import * as constants from "../../constants/constants";
import getAnimations from "../../helpers/sortingHelper";
import InteractionBar from "../../components/InteractionBar/InteractionBar";

class SortingVisualizer extends Component {
  state = {
    sortType: constants.BUBBLE_SORT
  };

  componentDidMount = () => {
    this.props.reset();
  };

  handleSortTypeChange = sortType => {
    this.setState({ ...this.state, sortType: sortType });
  };

  handleCommenceSort = () => {
    const animations = getAnimations(
      this.state.sortType,
      this.props.numbers.slice()
    );

    animations.map((animation, index) =>
      setTimeout(() => this.props.swap(animation), index * 10)
    );
  };

  render() {
    return (
      <div className={classes.SortingVisualizer}>
        <BarsContainer numbers={this.props.numbers} />
        <InteractionBar
          reset={() => this.props.reset()}
          commence={() => this.handleCommenceSort()}
          changeSortType={sortType => this.handleSortTypeChange(sortType)}
          sortType={this.state.sortType}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    numbers: state.numbers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reset: () => dispatch(actions.resetNumbers()),
    swap: indices => dispatch(actions.swap(indices))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingVisualizer);
