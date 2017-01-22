import React, { Component } from 'react';

// Components
import Header    from './components/Header';
import Specs     from './components/Specs';
import Timer     from './components/Timer';

class App extends Component {
  constructor(props) {
    super(props);
    let cargoSize = 0;
    let orePerCycle = 0;
    let timePerCycle = 0;
    if (localStorage.cargoSize) {
      cargoSize = Number(localStorage.cargoSize);
    }
    if (localStorage.orePerCycle) {
      orePerCycle = Number(localStorage.orePerCycle);
    }
    if (localStorage.timePerCycle) {
      timePerCycle = Number(localStorage.timePerCycle);
    }

    this.state = {
      cycleTimer: 0,
      cargoFullTimer: 0,
      started: false,
      orePerCycle: orePerCycle,
      timePerCycle: timePerCycle,
      cargo: cargoSize,
      maxValue: Math.round(cargoSize / ( orePerCycle / timePerCycle )),
    };
    this.tick = 1; // seconds.
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  // TIMER
  handleStartClick = () => {
    this.startTimer();
  }

  handleResetClick = () => {
    this.resetTimer();
  }

  startTimer() {
    if (!this.state.started) {
      this.setState({ started: true  });
      this.timer = setInterval(this.countDown, this.tick * 1000);
    }
  }

  resetTimer() {
    clearInterval(this.timer);
    this.setState({ 
      started: false,
      cycleTimer: 0,
      cargoFullTimer: 0,
    });
  }

  countDown() {
    if (this.state.cargoFullTimer === this.maxValue) {
      this.resetTimer();
    } else {
      this.setState({ cargoFullTimer: this.state.cargoFullTimer + this.tick });
      if (this.state.cycleTimer === this.state.timePerCycle) {
        this.setState({ cycleTimer: 1 });
      } else {
        this.setState({ cycleTimer: this.state.cycleTimer + this.tick });
      }
    }

  }

  // SPECS
  handleTextChange = (event) => {
    if (event.target.name === "orePerCycle") {
      this.setState({ orePerCycle: Number(event.target.value) });
    } else if (event.target.name === "cycleTime") {
      this.setState({ timePerCycle: Number(event.target.value) });
    } else if (event.target.name === "cargoSize") {
      this.setState({ cargo: Number(event.target.value) });
    }
    this.setState({ maxValue: Math.round(this.state.cargo / (this.state.orePerCycle / this.state.timePerCycle)), });

    console.log('Value changed to:', event.target.value, event.target.name);
  }

  handleSaveClick = () => {
    localStorage.cargoSize = this.state.cargo;
    localStorage.timePerCycle = this.state.timePerCycle;
    localStorage.orePerCycle = this.state.orePerCycle;
    location.reload();
  }

  render() {
    return (
      <div>
        <Header />
        <Timer
          barData={[
            {
              label: "Cycle Time",
              maxValue: this.state.timePerCycle,
              value: this.state.cycleTimer,
            },
            {
              label: "Cargo full",
              maxValue: this.state.maxValue,
              value: this.state.cargoFullTimer,
            }
          ]}
          startClick={this.handleStartClick}
          resetClick={this.handleResetClick}
        />
        <Specs
          saveClick={this.handleSaveClick}
          textChange={this.handleTextChange}
          cargo={this.state.cargo}
          orePerCycle={this.state.orePerCycle}
          timePerCycle={this.state.timePerCycle}
        />
      </div>
    );
  }
}

export default App;
