import React, { Component } from 'react';

class TimerBar extends Component {
  render() {
    const label = this.props.label + ': ';
    const maxValue = this.props.maxValue;
    const value = this.props.value;
    return (
      <div>
        {label}
        <progress max={maxValue} value={value}></progress>
        {" " + (maxValue - value) + ' seconds left.'}
      </div>
    );
  }
}

TimerBar.propTypes = {
  label: React.PropTypes.string,
  maxValue: React.PropTypes.number,
  value: React.PropTypes.number,
};

export default TimerBar;

