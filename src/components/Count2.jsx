import React, { useContext } from "react";

import { CounterContext } from "../context/CounterProvider";

const Count2 = () => {
  const { counter2 } = useContext(CounterContext);

  return <span>counter2 : {counter2}</span>;
};

export default Count2;
