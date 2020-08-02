import React, { Component } from "react";
import Videocard from "./Videocard";
import Constants from "./Constants";
import { Link } from "react-router-dom";
import Loading from "./Loading";
class Videodisc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      videos: [],
      currvideo: [],
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(
      Constants.backpath +
        "/course/getCourseByUin/" +
        this.props.match.params.id
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          lists: data.course.videos,
        })
      );

    fetch(
      Constants.backpath + "/getVideoByUin/" + this.props.match.params.vidid
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          currvideo: data,
          isLoading: false,
        })
      );
  }
  handleChange(e1, e) {
    e1.preventDefault();
    window.location = "../../video/" + this.props.match.params.id + "/" + e;
  }
  render() {
    var videos = this.state.lists;
    console.log();
    console.log(this.state.videos);
    if (this.state.isLoading) return <Loading />;
    else
      return (
        <div className="videodisc">
          <video
            className="vid"
            id="vidbase"
            src={this.state.currvideo.videoPath}
            type="video/mp4"
            controlsList="nodownload"
            disablePictureInPicture
            controls
            autoPlay
          />
          <div className="vidpl">
            <div className="viddiscmain">
              <h5>{this.state.currvideo.title}</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                cursus lorem vitae tincidunt ultricies. Nulla gravida interdum
                vestibulum. Cras sed tellus et metus imperdiet suscipit sit amet
                ac metus. Ut varius dapibus velit. In odio sapien, mollis id
                venenatis a, pharetra id ligula. Suspendisse quis tincidunt
                quam, sed scelerisque nulla. Nulla ligula tellus, gravida vitae
                blandit sed, ullamcorper malesuada diam. Nunc non ante sit amet
                neque mollis sodales nec a felis. Suspendisse at sollicitudin
                orci. Proin a est convallis, laoreet libero eget, sagittis eros.
                Curabitur sed augue accumsan, interdum nunc ac, scelerisque est.
                Proin sagittis porta quam, nec pulvinar dolor dapibus at. In
                suscipit volutpat sagittis. Nulla quam dolor, ullamcorper eget
                dignissim in, tincidunt sed ante. Mauris scelerisque viverra
                velit, nec rutrum nisl varius non. Nulla quam tortor, interdum
                vitae erat in, interdum iaculis nibh. Curabitur mi dolor,
                malesuada ullamcorper feugiat vel, pulvinar in lacus. Cras ac
                euismod massa. Phasellus laoreet purus eu imperdiet
                sollicitudin. Morbi tellus augue, pretium in eleifend id,
                pretium et tellus. Nunc porttitor nunc in lectus mattis, at
                volutpat leo consequat. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Praesent
                ex massa, finibus sed vehicula ut, tincidunt ac mauris. Morbi ut
                dui nulla. Cras molestie ultricies mauris. Nullam vel dolor eget
                dolor rhoncus rhoncus. Sed egestas sit amet tellus non maximus.
              </p>
            </div>

            <div className="viddiscplaylist">
              <h5>Playlist</h5>
              {videos.map((vid, index) => (
                <a
                  key={vid.uin}
                  onClick={(event) => this.handleChange(event, vid.uin)}
                >
                  <div className="vidpl2">
                    <div>
                      <img src={vid.thumbnailPath} />
                    </div>
                    <div className="vidpl2desc">
                      <div className="vdt1">{vid.title}</div>
                      <div className="vdt2">{vid.date}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
  }
}

export default Videodisc;
