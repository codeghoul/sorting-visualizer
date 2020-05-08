import React, { PureComponent } from "react";
import classes from "./Bar.module.css";

class Bar extends PureComponent {
  render() {
    return (
      <div
        className={classes.Bar}
        style={{ height: `${(this.props.height / 599) * 100}%` }}
      ></div>
    );
  }
}

export default Bar;
