import React, { Component } from 'react';

class Specs extends Component {
  handleSaveClick = () => {
    this.props.saveClick();
  }

  handleChange = (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
      <div>
        <label>Ore / Cycle:</label>
        <input type="text" onChange={this.handleChange} name="orePerCycle" value={this.props.orePerCycle} />
        m3
        <br />
        <label>Cycle time:</label>
        <input type="text" onChange={this.handleChange} name="cycleTime" value={this.props.timePerCycle} />
        seconds.
        <br />
        <label>Cargo size:</label>
        <input type="text" onChange={this.handleChange} name="cargoSize" value={this.props.cargo} />
        m3
        <p>
          <button onClick={this.handleSaveClick}>Save to localStorage</button>
        </p>
      </div>
    );
  }
}

Specs.PropTypes = {
  textChange: React.PropTypes.func,
  saveClick: React.PropTypes.func,
  cargo: React.PropTypes.number,
  orePerCycle: React.PropTypes.number,
  timePerCycle: React.PropTypes.number,
};

export default Specs;

