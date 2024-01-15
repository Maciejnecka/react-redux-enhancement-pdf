import React, { useState } from 'react';

import Counter from '../Counter';
import useOpacity from '../hoc/useOpacity';

const CounterContainer = () => {
  const [clicksNumber, setClicksNumber] = useState(0);
  const opacity = useOpacity(0.1, 5);

  const increment = () => {
    setClicksNumber(clicksNumber + 1);
  };

  return (
    <div style={{ opacity: opacity }}>
      <Counter onIncrement={increment} clicksNumber={clicksNumber} />
    </div>
  );
};

// class CounterContainer extends React.Component {
//   state = { clicksNumber: 0 };
//   increment = () => {
//     const { clicksNumber } = this.state;
//     this.setState({
//       clicksNumber: clicksNumber + 1,
//     });
//   };
//   render() {
//     const CounterWithOpacity = withOpacity(0.1, 5)(Counter);
//     return (
//       <CounterWithOpacity
//         onIncrement={this.increment}
//         clicksNumber={this.state.clicksNumber}
//       />
//     );
//   }
// }

export default CounterContainer;
