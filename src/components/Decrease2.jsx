import React from "react";
import { useDispatch } from "react-redux";
import { decrease2 } from "../redux/action";

const Decrease2 = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrease2())}>decrease counter2</button>
    </>
  );
};

export default Decrease2;
