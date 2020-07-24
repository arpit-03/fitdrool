import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardCarousel from "./Cardcarousel";

class Home extends Component {
  render() {
    return (
      <div>
        <CardCarousel key={1} link={this.props.link} title={this.props.title} />
      </div>
    );
  }
}

export default Home;
