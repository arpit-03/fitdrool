import React, { Component } from "react";
import Videocard from "./Videocard";
import Constants from "./Constants";
class Videodisc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      videos: [],
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
          lists: data,
          videos: data.course.videos[0],
          isLoading: false,
        })
      );
  }
  render() {
    console.log(this.state.videos);
    if (this.state.isLoading) return <h2>Loading</h2>;
    else
      return (
        <div className="videodisc">
          <video
            className="vid"
            id="vidbase"
            src={this.state.videos.videoPath}
            type="video/mp4"
            controlsList="nodownload"
            disablePictureInPicture
            controls
          />
          <div className="viddiscmain">
            <h5>{this.state.videos.title}</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              cursus lorem vitae tincidunt ultricies. Nulla gravida interdum
              vestibulum. Cras sed tellus et metus imperdiet suscipit sit amet
              ac metus. Ut varius dapibus velit. In odio sapien, mollis id
              venenatis a, pharetra id ligula. Suspendisse quis tincidunt quam,
              sed scelerisque nulla. Nulla ligula tellus, gravida vitae blandit
              sed, ullamcorper malesuada diam. Nunc non ante sit amet neque
              mollis sodales nec a felis. Suspendisse at sollicitudin orci.
              Proin a est convallis, laoreet libero eget, sagittis eros.
              Curabitur sed augue accumsan, interdum nunc ac, scelerisque est.
              Proin sagittis porta quam, nec pulvinar dolor dapibus at. In
              suscipit volutpat sagittis. Nulla quam dolor, ullamcorper eget
              dignissim in, tincidunt sed ante. Mauris scelerisque viverra
              velit, nec rutrum nisl varius non. Nulla quam tortor, interdum
              vitae erat in, interdum iaculis nibh. Curabitur mi dolor,
              malesuada ullamcorper feugiat vel, pulvinar in lacus. Cras ac
              euismod massa. Phasellus laoreet purus eu imperdiet sollicitudin.
              Morbi tellus augue, pretium in eleifend id, pretium et tellus.
              Nunc porttitor nunc in lectus mattis, at volutpat leo consequat.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Praesent ex massa, finibus sed
              vehicula ut, tincidunt ac mauris. Morbi ut dui nulla. Cras
              molestie ultricies mauris. Nullam vel dolor eget dolor rhoncus
              rhoncus. Sed egestas sit amet tellus non maximus.
            </p>
          </div>
        </div>
      );
  }
}

export default Videodisc;
