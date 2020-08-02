import React, { Component } from "react";
class Contactus extends Component {
  state = {};
  render() {
    return (
      <div className="contactus">
        <div>
          <h5>Join The Fitness Revolution</h5>
        </div>
        <p>Contact Us</p>
        <p>Fitdrool@gmail.com</p>
        <p>7683056351</p>
        <div className="social1">
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
      </div>
    );
  }
}

export default Contactus;
