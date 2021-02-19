import React from "react";

import Count1 from "../components/Count1";
import Count2 from "../components/Count2";
import Increase1 from "../components/Increase1";
import Increase2 from "../components/Increase2";
import Decrease1 from "../components/Decrease1";
import Decrease2 from "../components/Decrease2";

const Counter = () => {
  return (
    <div className="counter">
      <h3>카운터</h3>
      <div className="counter__container">
        <Count1 />
        <div className="counter__buttons">
          <Increase1 />
          <Decrease1 />
        </div>
        <Count2 />
        <div className="counter__buttons">
          <Increase2 />
          <Decrease2 />
        </div>
      </div>
    </div>
  );
};

export default Counter;
