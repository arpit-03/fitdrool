import React, { Component } from "react";
class Loading extends Component {
  state = {};
  render() {
    return (
      <div className="loading">
        <img src="https://i.pinimg.com/originals/78/e8/26/78e826ca1b9351214dfdd5e47f7e2024.gif" />
      </div>
    );
  }
}

export default Loading;
