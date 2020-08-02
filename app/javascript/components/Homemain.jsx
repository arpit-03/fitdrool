import React, { Component } from "react";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import Category from "./Category";
import Advert from "./Advert";
import Contactus from "./Contactus";
import Leadform from "./Leadform";
class Homemain extends Component {
  state = {};

  render() {
    return (
      <div>
        <Home />
        <div className="quotemain q1">
          <div className="quote">
            <p>When you feel like quitting</p>
            <p>Think why you started.</p>
          </div>
        </div>

        <About />
        <div className="quotemain q2">
          <div className="quote">
            <p>Do something today</p>
            <p>that your future self</p>
            <p>is thankfull for !</p>
          </div>
        </div>
        <div className="adcontain">
          <Advert />
          <Contactus />
        </div>
        <Leadform />
        <Footer />
      </div>
    );
  }
}

export default Homemain;
