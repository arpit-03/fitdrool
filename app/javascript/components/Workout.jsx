import React, { Component } from "react";
import Cardcarousel from "./Cardcarousel";
import Listcard from "./Listcard";
import Footer from "./Footer";
import { Link } from "react-router-dom";
class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],

      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(
      "http://localhost:8081/course/searchCoursesByCategory/" +
        this.props.title +
        "/200"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ lists: data, isLoading: false }));
  }
  render() {
    if (this.state.isLoading) return <h2>Loading</h2>;
    else
      return (
        <div>
          <img className="bannerworkout" src={this.props.link}></img>
          <div className="videogallery">
            <Cardcarousel
              title={this.props.title}
              swipelist={this.state.lists.slice(0, 6)}
            />
          </div>
          <div className="displaylist">
            <h5 className="av">All {this.props.title} Videos</h5>
            {this.state.lists.map((list, index) => (
              <Link key={index} to={"../course/index/" + list.course.uin}>
                <Listcard
                  key={list.course.uin}
                  title={list.course.name}
                  summary={list.course.description}
                  trainer={list.trainerName}
                  affiliation={list.certificatesTrainer.toString()}
                  link={list.course.thumbnailPath}
                />
              </Link>
            ))}
          </div>
          <Footer />
        </div>
      );
  }
}

export default Workout;
