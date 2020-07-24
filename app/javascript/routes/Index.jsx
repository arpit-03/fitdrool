import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homemain from "../components/Homemain";
import Yoga from "../components/Yoga";
import Gym from "../components/Gym";
import Cardio from "../components/Cardio";
import Dance from "../components/Dance";
import Zumba from "../components/Zumba";
import Nutrition from "../components/Nutrition";
import Videodisc from "../components/Videodisc";
import Course from "../components/Course";
import ScrollToTop from "../components/ScrollToTop";
import Search from "../components/Search";

export default (
  <Router>
    <ScrollToTop />
    <Switch>
      <Route path="/" exact component={Homemain} />
      <Route path="/yoga" exact component={Yoga} />
      <Route path="/gym" exact component={Gym} />
      <Route path="/nutrition" exact component={Nutrition} />
      <Route path="/dance" exact component={Dance} />
      <Route path="/zumba" exact component={Zumba} />
      <Route path="/cardio" exact component={Cardio} />
      <Route path="/course/index/:id" component={Course} />
      <Route path="/video/index/:id" exact component={Videodisc} />
      <Route path="/search/index/:query" exact component={Search} />
    </Switch>
  </Router>
);
