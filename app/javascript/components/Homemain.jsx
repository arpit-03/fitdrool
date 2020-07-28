import React, { Component } from "react";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Category from "./Category";
class Homemain extends Component {
  state = {};
  componentDidMount() {
    ScrollReveal().reveal(".ac");
  }
  render() {
    return (
      <div>
        <Home />
        <About />
        <Category />
        <Footer />
      </div>
    );
  }
}

export default Homemain;
