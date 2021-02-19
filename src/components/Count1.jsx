import React from "react";
import { useSelector } from "react-redux";

const Count1 = () => {
  const counter1 = useSelector((state) => {
    console.log(state.counter1);
    return state.counter1;
  });
  return (
    <div className="count">
      <div className="count__container">
        <span> counter1 : {counter1}</span>
      </div>
    </div>
  );
};

export default Count1;
