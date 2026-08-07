import React, { Component } from "react";

class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <h3>Total Clicks</h3>
        <p>Clicked {this.props.count} times</p>
      </div>
    );
  }
}

export default CounterDisplayer;