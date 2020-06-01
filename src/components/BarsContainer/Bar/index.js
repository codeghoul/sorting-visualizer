import React from "react";

const Bar = (props) => {
  return (
    <div
      className="bar"
      style={{ height: `${(props.height) / 3}%` }}
    ></div>
  );
};

export default Bar;
