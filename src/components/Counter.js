import React from 'react';

const Counter = (props) => {
  const { onIncrement, clicksNumber } = props;

  return <button onClick={onIncrement}>{clicksNumber}</button>;
};

export default Counter;
