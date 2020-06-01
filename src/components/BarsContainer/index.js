import React from "react";
import Bar from "./Bar";

const barsContainer = props => (
  <div className="w-full h-full p-4 flex justify-evenly items-end flex-no-wrap">
    {props.numbers.map((number, index) => (
      <Bar key={index} height={number}></Bar>
    ))}
  </div>
);

export default barsContainer;
