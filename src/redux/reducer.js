var defaultState = {
  counter1: 0,
  counter2: 0,
};

const reducer = (state = defaultState, action) => {
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

export default reducer;
