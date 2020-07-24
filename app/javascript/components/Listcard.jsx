import React, { Component } from "react";
class Listcard extends Component {
  state = {};
  render() {
    return (
      <div className="Listitem">
        <div className="itemthumbnail">
          <img src={this.props.link} />
        </div>
        <div className="containitem">
          <div className="itemsum">
            <h5>{this.props.title}</h5>
            <p className="listtrainer">{this.props.trainer}</p>
            <p className="listtrainer">{this.props.affiliation}</p>
            <p className="listpara">{this.props.summary}</p>
          </div>

          <div className="clock">
            <i className="far fa-clock"></i>
            <p>5 Days / Week</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Listcard;
