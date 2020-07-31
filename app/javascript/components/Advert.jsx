import React, { Component } from "react";
class Advert extends Component {
  state = {};
  render() {
    return (
      <div className="advert">
        <div>
          <img src="https://athleanx.com/wp-content/uploads/2017/08/ax-look-bkg.png" />
        </div>
        <div className="mat">
          <p>Stop Thinking</p>
          <p>Start Your Fitness Journey</p>
          <p>Join Us Today</p>
        </div>
      </div>
    );
  }
}

export default Advert;
