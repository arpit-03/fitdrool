import React, { Component } from "react";
import Home from "./Home";
import Footer from "./Footer";
class Homemain extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="topvideos" className="videogallery">
          <Home
            key={1}
            link={"https://ychef.files.bbci.co.uk/800x450/p07ztf1q.jpg"}
            title={"Top Videos"}
          />
        </div>
        <div id="recentvideos" className="videogallery">
          <Home
            key={2}
            link={
              "https://media1.s-nbcnews.com/j/newscms/2020_02/3179211/200109-stock-kettlebell-woman-gym-ew-541p_ae34ed0f6331ebc628395c9f307013d3.fit-760w.jpg"
            }
            title={"Recent Videos"}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homemain;
