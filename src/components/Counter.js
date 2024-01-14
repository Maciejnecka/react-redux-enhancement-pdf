import React from 'react';

export class Counter extends React.Component {
    state = { clicksNumber: 0 };
    increment = () => {
        const { clicksNumber } = this.state;
        this.setState({
            clicksNumber: clicksNumber + 1,
        });
    };
    render() {
        const { clicksNumber } = this.state;
        return <button onClick={this.increment}>{clicksNumber}</button>;
    }
}

export default Counter;
