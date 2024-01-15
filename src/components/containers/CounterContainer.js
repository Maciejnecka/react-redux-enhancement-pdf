import React from 'react';
import Counter from '../Counter';

class CounterContainer extends React.Component {
  state = { clicksNumber: 0 };
  increment = () => {
    const { clicksNumber } = this.state;
    this.setState({
      clicksNumber: clicksNumber + 1,
    });
  };
  render() {
    return (
      <Counter
        onIncrement={this.increment}
        clicksNumber={this.state.clicksNumber}
      />
    );
  }
}

export default CounterContainer;
