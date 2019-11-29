import React, { Component } from "react";
import classes from "./Bar.module.css";

class Bar extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.height !== this.props.height;
  }

  render() {
    return (
      <div
        className={classes.Bar}
        style={{ height: `${this.props.height / 599 * 100}%` }}
      ></div>
    );
  }
}

export default Bar;
