import React, { Component } from "react";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
class Homemain extends Component {
  state = {};

  render() {
    return (
      <div>
        <Home />
        <About />
        <Footer />
      </div>
    );
  }
}

export default Homemain;
