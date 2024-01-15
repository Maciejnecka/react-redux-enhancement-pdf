import types from '../types/counter';

const initState = { counter: 0 };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.INCREASE_COUNTER:
      const { step } = action.payload;
      return {
        counter: state.counter + step,
      };
    case types.SET_COUNTER:
      return {
        counter: action.payload.value,
      };
    default:
      return state;
  }
};

export default reducer;
