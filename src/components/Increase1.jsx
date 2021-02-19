import React, { useContext } from "react";

import { increase1 } from "../context/action";
import { CounterContext } from "../context/CounterProvider";

const Increase1 = () => {
  const { counterDispatch } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => counterDispatch(increase1())}>increase counter1</button>
    </>
  );
};

export default Increase1;
