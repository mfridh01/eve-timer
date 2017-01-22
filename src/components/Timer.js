import React, { Component } from 'react';
import TimerBar from './TimerBar';

class Timer extends Component {
  handleStartClick = () => {
    this.props.startClick();
  }

  handleResetClick = () => {
    this.props.resetClick();
  }

  render() {
    return (
      <div>
        {this.props.barData.map((barData) => {
          return (
            <TimerBar
              key={barData.label}
              label={barData.label}
              maxValue={barData.maxValue}
              value={barData.value}
            />
          );
        })}
        <button onClick={this.handleStartClick}>Start</button>{" "}
        <button onClick={this.handleResetClick}>Reset</button>
      </div>
    );
  }
}

Timer.propTypes = {
  barData: React.PropTypes.array,
  startClick: React.PropTypes.func,
  resetClick: React.PropTypes.func,
}

export default Timer;

