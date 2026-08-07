import React, { Component } from "react";

class EvenCounterDisplayer extends Component {
  render() {

    let evenCount;

    if (this.props.count % 2 === 0) {
      evenCount = this.props.count;
    } else {
      evenCount = this.props.count - 1;
    }

    return (
      <div>
        <h3>Even Click Counter</h3>
        <p>Clicked {evenCount} times</p>
      </div>
    );
  }
}

export default EvenCounterDisplayer;