import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import { increase2 } from "../redux/action";

const Increase2 = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increase2())}>increase counter2</button>
    </>
  );
};

export default Increase2;
