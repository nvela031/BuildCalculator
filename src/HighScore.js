import React, { Component } from "react";

export class HighScore extends Component {
  render() {
    if (this.props.overTen) {
      return (
        <div>
          <h3>Beat high score of 10!</h3>
          <button onClick={this.props.onReset}>Reset</button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default HighScore;
