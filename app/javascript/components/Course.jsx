import React, { Component } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Constants from "./Constants";
class Course extends Component {
  constructor(props) {
    super(props);
    this.enroll = this.enroll.bind(this);
    this.checkenroll = this.checkenroll.bind(this);
    this.state = {
      listl: [],
      btn: (
        <div id="enrfree" onClick={this.enroll}>
          Enroll For Free
        </div>
      ),
      course: [],
      videos: [],
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
          listl: data,
          course: data.course,
          videos: data.course.videos,
          isLoading: false,
        })
      );
    this.checkenroll();
  }
  userget() {
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
          uin = false;
        }
      },
    });
    return uin;
  }
  checkenroll() {
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
          uin = false;
        }
      },
    }).done(function () {
      console.log(uin);
      if (uin != false) {
        $.ajax({
          type: "get",
          url:
            Constants.backpath +
            "/checkIfEnrolled/" +
            k.props.match.params.id +
            "/" +
            uin,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            headerKey: "98f88a00-152a-4627-8157-3814c754c035",
          },

          datatype: "application/json",
          success: function (e) {
            if (e) {
              k.setState({
                btn: (
                  <Link to={"../../video/index/" + k.props.match.params.id}>
                    <div id="enrplay">Play Now</div>
                  </Link>
                ),
              });
            }
          },
          error: function (e) {},
        });
      }
    });
  }

  enroll() {
    console.log("abc");
    console.log(this.props);

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
          uin = false;
        }
      },
    }).done(function () {
      var edata = { uin: uin };
      var id = k.props.match.params.id;
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
      });
    });
  }
  render() {
    var listl = this.state.listl;
    var course = this.state.course;
    var videos = this.state.videos;
    if (this.state.isLoading) return <h2>Loading</h2>;
    else
      return (
        <div>
          <div className="courseheader">
            <div>
              <h5>{course.name}</h5>
              <p>{listl.trainerName}</p>

              <p className="certi">{listl.certificatesTrainer}</p>
              <div className="enroll" id="enrfreecontain">
                {this.state.btn}
              </div>
            </div>

            <div className="thmbnail">
              <img src={course.thumbnailPath} />
            </div>
          </div>
          <div className="coursedesc">
            <div className="desc">
              <h5>Description</h5>
              <p>{course.description}</p>
              <div className="structure">
                <div className="structurehead">
                  <div>
                    <p>Structure</p>
                  </div>
                  <div className="structureheadright">
                    <p>{videos.length} videos</p> <p>00:00</p>
                  </div>
                </div>

                {videos.map((vid) => (
                  <div className="vidplaylist" key={vid.uin}>
                    <div className="titleplay">
                      <i className="fas fa-play"></i>
                      <p className="vidplaylisttitle">Video 1: {vid.title}</p>
                    </div>
                    <p>00:00</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="abttrainer">
              <h5>About Trainer</h5>
              <div className="imgtrainerdiv">
                <img src={listl.trainerProfilePicPath} />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tempus, tellus sed mollis auctor, ante metus aliquet
                magna, in mattis ligula erat sit amet arcu. Aenean pellentesque,
                sapien ac venenatis luctus, dolor lorem ornare nulla, quis
                aliquam tortor purus at elit. Sed vestibulum ipsum in finibus
                mollis. Aliquam erat volutpat. In hac habitasse platea dictumst.
                Proin faucibus non libero vel porta. Praesent interdum nunc in
                eros varius cursus eget vel neque. In auctor tortor nisi, a
                viverra purus pretium at. Cras eu dictum erat. Mauris maximus
                neque ex, eu molestie augue pulvinar vel. Proin ex neque, porta
                quis vehicula nec, fringilla accumsan magna. Proin pretium,
                justo ut elementum hendrerit, velit nunc cursus felis, eget
                fringilla sem metus et leo. Vestibulum odio augue, malesuada et
                metus facilisis, cursus lacinia eros. Morbi imperdiet nibh erat,
                vel efficitur nibh commodo at. Praesent non laoreet odio. Morbi
                vitae porttitor mi. Fusce eros purus, vehicula eu nunc vel,
                efficitur lobortis diam. Donec iaculis efficitur nunc vitae
                gravida. Integer sit amet vehicula nisi. Cras tincidunt ante at
                libero sodales, eget luctus nunc mollis. Suspendisse fringilla
                dolor et justo fringilla laoreet. Vivamus eget tristique ex.
                Cras congue, dui et eleifend tempor, lectus ligula pellentesque
                ante, sed ullamcorper est eros non nibh. Duis faucibus rutrum
                neque, quis varius mauris. Donec semper urna odio, non hendrerit
                lacus dictum et.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      );
  }
}

export default Course;
