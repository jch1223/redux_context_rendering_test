import React, { useContext, memo } from "react";

import { decrease2 } from "../context/action";
import { CounterContext } from "../context/CounterProvider";

const Decrease2 = memo(() => {
  const { counterDispatch } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => counterDispatch(decrease2())}>decrease counter2</button>
    </>
  );
});

export default Decrease2;
