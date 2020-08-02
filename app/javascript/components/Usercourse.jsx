import React, { Component } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Listcard from "./Listcard";
import Constants from "./Constants";
import Loading from "./Loading";
class Usercourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    var uin = null;
    var k = this;
    $.ajax({
      type: "get",
      url: "../../api/v1/session/checksession",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      datatype: "application/json",
      success: function (e) {
        if (e.status) {
          uin = e.uin;
        } else {
          alert("User not Logged in");
        }
      },
    }).done(function () {
      fetch(Constants.backpath + "/course/getCoursesByUserUin/" + uin)
        .then((response) => response.json())
        .then((data) => k.setState({ lists: data, isLoading: false }));
    });
  }

  render() {
    if (this.state.isLoading) return <Loading />;
    else if (this.state.lists.length == 0)
      return (
        <div className="usernocourse">
          <div className="usernocover">
            <p>It feels lonely in here</p>
            <p>Enroll yourself and start your fitness journey</p>
            <div className="ennowdiv">
              <a onClick={() => (window.location = "../..")}>
                <div className="ennow">Enroll Now</div>
              </a>
            </div>
          </div>
        </div>
      );
    else
      return (
        <div>
          <div className="mycourse">
            <h5>My Courses</h5>
            <div>
              {this.state.lists.map((list, index) => (
                <Link key={index} to={"../../course/index/" + list.courseUin}>
                  <Listcard
                    key={list.courseUin}
                    title={list.courseName}
                    summary={list.courseDescription}
                    trainer={list.trainerName}
                    affiliation={"BCCI Complied"}
                    link={list.courseThumbnalPath}
                  />
                </Link>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      );
  }
}

export default Usercourse;
