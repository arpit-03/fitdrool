import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="footsection">
          <a className="sections">About</a>
          <a className="sections">Contact us</a>
          <a className="sections">Terms and Conditions</a>
        </div>
        <div className="social">
          <a href="https://www.facebook.com/FitDrool-645792512701751">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com/fitdrool">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCvYvOHMihZ4hcuB7WE_ea8g">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/fitdrool/?hl=en">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div>
          <Link to={"../.."} className="navbar-brand">
            <i className="fas fa-dumbbell"></i> FitDrool
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
