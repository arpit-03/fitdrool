import React, { Component } from "react";
import Workout from "./Workout";
class Gym extends Component {
  state = {};
  render() {
    return (
      <Workout
        link="https://i.pinimg.com/originals/9f/48/d6/9f48d6695026c9f24474cf5873e9a118.jpg"
        title="Home Workout"
      />
    );
  }
}

export default Gym;
