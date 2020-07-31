import React, { Component } from "react";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Category from "./Category";
import Advert from "./Advert";
import Contactus from "./Contactus";
class Homemain extends Component {
  state = {};

  render() {
    return (
      <div>
        <Home />

        <About />
        <div className="adcontain">
          <Advert />
          <Contactus />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homemain;
