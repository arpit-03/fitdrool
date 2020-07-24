import React, { Component } from "react";
import Workout from "./Workout";
class Zumba extends Component {
  state = {};
  render() {
    return (
      <Workout
        link="https://denverhealthfitness.com/wp-content/uploads/2014/11/Zumba-at-DHF-Banner.png"
        title="Zumba"
      />
    );
  }
}

export default Zumba;
