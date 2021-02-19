import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { decrease1 } from "../redux/action";

const Decrease1 = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrease1())}>decrease counter1</button>
    </>
  );
};

export default Decrease1;
