import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import { increase1 } from "../redux/action";

const Increase1 = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increase1())}>increase counter1</button>
    </>
  );
};

export default Increase1;
