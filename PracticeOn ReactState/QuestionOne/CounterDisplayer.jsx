import React, { Component } from "react";
import "../styleForThisFolder.css";
class CounterDisplayer extends Component {
  render() {
    return (
      <div className="counterDisplayer">
        <h3>Number of Clicks: {this.props.count}</h3>
      </div>
    );
  }
}

export default CounterDisplayer;