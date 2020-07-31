import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cardcarousel from "./Cardcarousel";
import Constants from "./Constants";
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

    fetch(Constants.backpath + "/course/searchCoursesByCategory/yoga/8")
      .then((response) => response.json())
      .then((data) => this.setState({ lists: data }));
    fetch(
      Constants.backpath + "/course/searchCoursesByCategory/home%20workout/8"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ lists2: data, isLoading: false }));
  }
  render() {
    return (
      <div className="ac">
        <div className="videogallery">
          <Cardcarousel title={"Recent Courses"} swipelist={this.state.lists} />
        </div>
        <div className="videogallery">
          <Cardcarousel title={"Top Courses"} swipelist={this.state.lists2} />
        </div>
      </div>
    );
  }
}

export default Home;
