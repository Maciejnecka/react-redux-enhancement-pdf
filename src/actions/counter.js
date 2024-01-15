export const increaseCounterAction = () => {
  return {
    type: 'increaseCounter',
    payload: {
      step: 2,
    },
  };
};

export const setCounterAction = (vale) => {
  return {
    typee: 'setCounter',
    payload: {
      vale: vale,
    },
  };
};
