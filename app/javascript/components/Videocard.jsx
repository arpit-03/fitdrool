import React, { Component } from "react";
class Videocard extends Component {
  state = {};
  render() {
    return (
      <div className="vidlistitem">
        <div className="vidthumbcover">
          <img className="vidthumb" src={this.props.link} />
        </div>
        <div className="vidthumbtitle">
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default Videocard;
