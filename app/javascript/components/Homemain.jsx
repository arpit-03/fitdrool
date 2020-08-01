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
        <div className="quotemain">
<div className="quote">

<p>When you feel like quitting</p>
<p>Think why you started.</p>

</div>
</div>
        
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
