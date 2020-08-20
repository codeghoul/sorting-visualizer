import React from "react";
import Bar from "./Bar";

const barsContainer = ({ numbers }) => (
  <div className="w-full h-full p-4 flex justify-evenly items-end flex-no-wrap">
    {numbers.map((number, index) => (
      <Bar height={number}></Bar>
    ))}
  </div>
);

export default barsContainer;
