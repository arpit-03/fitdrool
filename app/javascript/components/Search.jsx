import React, { Component } from "react";
import { Link } from "react-router-dom";
import Listcard from "./Listcard";
import Constants from "./Constants";
import Loading from "./Loading";
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
    if (this.state.isLoading) return <Loading />;
    else if (this.state.lists.length == 0)
      return (
        <div className="usernocourse">
          <div className="usernocover">
            <p>The search got no results</p>
            <p>Try searching other courses</p>
          </div>
        </div>
      );
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
