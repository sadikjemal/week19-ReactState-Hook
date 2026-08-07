import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import "../styleForThisFolder.css";
import EvenCounterDisplayer from "../QuestionTwo/EvenCounterDisplayer";

class MyCounter extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      clickCount: 0,
    };
  }


  allClicksCounter = () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
    });
  };

  render() {
    return (
      <div className="myCounter">
        <h2>React Click Counter</h2>

        <button onClick={this.allClicksCounter}>
          Click Me
        </button>

      {/* #1 */}
        <CounterDisplayer count={this.state.clickCount} />

          {/* #2 */}
        <EvenCounterDisplayer count={this.state.clickCount} />

      </div>
    );
  }
}

export default MyCounter;