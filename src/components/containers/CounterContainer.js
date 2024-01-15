import React from 'react';
import Counter from '../Counter';
import withOpacity from '../hoc/withOpacity';

class CounterContainer extends React.Component {
  state = { clicksNumber: 0 };
  increment = () => {
    const { clicksNumber } = this.state;
    this.setState({
      clicksNumber: clicksNumber + 1,
    });
  };
  render() {
    const CounterWithOpacity = withOpacity(0.1, 5)(Counter);
    return (
      <CounterWithOpacity
        onIncrement={this.increment}
        clicksNumber={this.state.clicksNumber}
      />
    );
  }
}

export default CounterContainer;
