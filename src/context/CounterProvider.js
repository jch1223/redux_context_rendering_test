import React, { useMemo, useReducer } from "react";

export const CounterContext = React.createContext();

const initialState = {
  counter1: 0,
  counter2: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER1":
      return {
        ...state,
        counter1: state.counter1 + 1,
      };
    case "DECREASE_COUNTER1":
      return {
        ...state,
        counter1: state.counter1 - 1,
      };

    case "INCREASE_COUNTER2":
      return {
        ...state,
        counter2: state.counter2 + 1,
      };
    case "DECREASE_COUNTER2":
      return {
        ...state,
        counter2: state.counter2 - 1,
      };
    default:
      return state;
  }
};

const CounterProvider = (props) => {
  const [counter, counterDispatch] = useReducer(counterReducer, initialState);
  const { counter1, counter2 } = counter;

  return (
    <CounterContext.Provider
      value={{
        counter1: counter1,
        counter2: counter2,
        counterDispatch: counterDispatch,
      }}
    >
      <>{props.children}</>
    </CounterContext.Provider>
  );
};

export default CounterProvider;
