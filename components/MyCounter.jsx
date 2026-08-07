import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";

class MyCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  allClicksCounter = () => {
  this.setState({
    count: this.state.count + 1,
  });
};

  render() {
   return (
  <div>
    <h2>My Counter Component</h2>

    <button onClick={this.allClicksCounter}>
  Click Me
</button>

    <p>Current Count: {this.state.count}</p>
    <CounterDisplayer count={this.state.count} />
    <EvenCounterDisplayer count={this.state.count} />
  </div>
);
  }
}

export default MyCounter;