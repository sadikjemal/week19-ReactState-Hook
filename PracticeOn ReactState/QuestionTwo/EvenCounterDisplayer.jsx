import React, { Component } from "react";
import "../styleForThisFolder.css";
class EvenCounterDisplayer extends Component {
  render() {
    const evenCount =
      this.props.count % 2 === 0
        ? this.props.count
        : this.props.count - 1;

    return (
      <div className="evenCounterDisplayer">
        {/* #1 */}
        <h3>Even Counter: Clicked {evenCount} times</h3>


      


      </div>
    );
  }
}

export default EvenCounterDisplayer;