import React, { Component } from "react";
import Workout from "./Workout";
class Nutrition extends Component {
  state = {};
  render() {
    return (
      <Workout
        link="https://images.squarespace-cdn.com/content/v1/59e96d4f90bccec666d24b3b/1576489382293-S04826P1V0N3HAIEGK8U/ke17ZwdGBToddI8pDm48kA7ZnXjLYZ9jduREYvqdI9VZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI5lEX9AkerGXrl5KBnEmMj0omfy_DPLzKfywtjLwyN-M/Nutrition+Banner+1.png?format=1500w"
        title="Nutrition"
      />
    );
  }
}

export default Nutrition;
