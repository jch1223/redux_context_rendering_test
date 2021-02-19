import React from "react";
import { useSelector } from "react-redux";

const Count2 = () => {
  const counter2 = useSelector((state) => {
    console.log(state.counter2);
    return state.counter2;
  });
  return (
    <div className="count">
      <div className="count__container">
        <span>counter2 : {counter2}</span>
      </div>
    </div>
  );
};

export default Count2;
