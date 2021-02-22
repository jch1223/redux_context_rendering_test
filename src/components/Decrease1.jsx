import React, { useContext, memo } from "react";

import { decrease1 } from "../context/action";
import { CounterContext } from "../context/CounterProvider";

const Decrease1 = memo(() => {
  const { counterDispatch } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => counterDispatch(decrease1())}>decrease counter1</button>
    </>
  );
});

export default Decrease1;
