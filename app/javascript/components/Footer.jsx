import React, { Component } from "react";
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
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <div>
          <a className="navbar-brand">
            <i className="fas fa-dumbbell"></i> FitDrool
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
