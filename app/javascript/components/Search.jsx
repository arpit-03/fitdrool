import React, { Component } from "react";
import { Link } from "react-router-dom";
import Listcard from "./Listcard";
import Constants from "./Constants";
class Search extends Component {
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
      Constants.backpath +
        "/course/searchCourses/" +
        this.props.match.params.query +
        "/200"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ lists: data, isLoading: false }));
  }
  render() {
    if (this.state.isLoading) return <h2>Loading</h2>;
    else
      return (
        <div className="searchcards">
          {this.state.lists.map((list, index) => (
            <Link key={index} to={"../../course/index/" + list.course.uin}>
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
      );
  }
}

export default Search;
