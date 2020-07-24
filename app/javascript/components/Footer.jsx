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
        <div>
          <a className="navbar-brand">FitStudio</a>
        </div>
      </div>
    );
  }
}

export default Footer;
