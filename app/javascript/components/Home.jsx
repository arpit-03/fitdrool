import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cardcarousel from "./Cardcarousel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      lists2: [],

      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("http://localhost:8081/course/searchCoursesByCategory/yoga/8")
      .then((response) => response.json())
      .then((data) => this.setState({ lists: data }));
    fetch(
      "http://localhost:8081/course/searchCoursesByCategory/home%20workout/8"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ lists2: data, isLoading: false }));
  }
  render() {
    return (
      <div>
        <div className="videogallery">
          <Cardcarousel title={"Recent Videos"} swipelist={this.state.lists} />
        </div>
        <div className="videogallery">
          <Cardcarousel title={"Top Videos"} swipelist={this.state.lists2} />
        </div>
      </div>
    );
  }
}

export default Home;
