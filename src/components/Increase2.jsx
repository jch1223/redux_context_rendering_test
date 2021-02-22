import React, { useContext, memo } from "react";

import { increase2 } from "../context/action";
import { CounterContext } from "../context/CounterProvider";

const Increase2 = memo(() => {
  const { counterDispatch } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => counterDispatch(increase2())}>increase counter2</button>
    </>
  );
});

export default Increase2;
