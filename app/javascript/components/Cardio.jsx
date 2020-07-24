import React, { Component } from "react";
import Workout from "./Workout";
class Cardio extends Component {
  state = {};
  render() {
    return (
      <Workout
        link="https://www.purica.com/wp-content/uploads/2016/06/treadmill_banner.jpg"
        title="Cardio"
      />
    );
  }
}

export default Cardio;
