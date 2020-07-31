import React, { Component } from "react";
import Constants from "./Constants";
import Footer from "./Footer";
class Courseconfirm extends Component {
  constructor(props) {
    super(props);
    this.enroll = this.enroll.bind(this);
    this.state = {
      list: [],
      course: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    console.log("a");
    fetch(
      Constants.backpath +
        "/course/getCourseByUin/" +
        this.props.match.params.id
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          list: data,
          course: data.course,
          isLoading: false,
        })
      );
  }
  enroll() {
    var uin = null;
    var k = this;
    var id = k.props.match.params.id;
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
          window.location = "../..";
        }
      },
    }).done(function () {
      var edata = { uin: uin };

      $.ajax({
        type: "post",
        url: Constants.backpath + "/joinCourse/" + id,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          headerKey: "98f88a00-152a-4627-8157-3814c754c035",
        },
        data: JSON.stringify(edata),
        datatype: "application/json",
        success: function (e) {
          console.log(e);
          window.location = "../../course/index/" + id;
        },
        error: function () {
          alert("Error in enrolling");
        },
      });
    });
  }

  render() {
    var list = this.state.list;
    var course = this.state.course;
    if (this.state.isLoading) return <h2>Loading</h2>;
    else
      return (
        <div>
          <div className="courseticket">
            <div className="Courseconfirm">
              <div>
                <div className="cc1">
                  <div className="cc1l">
                    <h5>{course.name}</h5>
                    <p>{list.trainerName}</p>

                    <p>{list.certificatesTrainer}</p>
                    <img src={course.thumbnailPath} />
                  </div>
                  <div className="cc1r">
                    <div>
                      <i className="fas fa-clipboard-check"></i>
                      <p>Videos regulated and Updated Daily</p>
                    </div>
                    <div>
                      <i className="fas fa-headset"></i>
                      <p>24/7 Support and Helpline</p>
                    </div>
                    <div>
                      <i className="fas fa-user-check"></i>
                      <p>Certified and Experienced Trainers</p>
                    </div>
                    <div id="courseenrollbtn" onClick={this.enroll}>
                      <p>Join Now For Free</p>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
  }
}

export default Courseconfirm;
