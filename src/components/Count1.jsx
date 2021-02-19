import React, { useContext, useMemo } from "react";

import { CounterContext } from "../context/CounterProvider";

const Count1 = () => {
  const { counter1 } = useContext(CounterContext);

  return <span> counter1 : {counter1}</span>;
};

export default Count1;
