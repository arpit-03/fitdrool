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
import Usercourse from "../components/Usercourse";
import Courseconfirm from "../components/Courseconfirm";

export default (
  <Router>
    <ScrollToTop />
    <Switch>
      <Route path="/" exact component={Homemain} />
      <Route path="/yoga" exact component={Yoga} />

      <Route path="/cardio" exact component={Gym} />
      <Route path="/home workout" exact component={Gym} />
      <Route path="/gym workout" exact component={Gym} />
      <Route path="/zumba" exact component={Yoga} />
      <Route path="/mind" exact component={Gym} />
      <Route path="/nutrition" exact component={Yoga} />
      <Route path="/dance" exact component={Yoga} />
      <Route path="/zumba" exact component={Gym} />
      <Route path="/course/index/:id" component={Course} />
      <Route path="/course/confirm/:id" component={Courseconfirm} />
      <Route path="/video/index/:id/:vidid" exact component={Videodisc} />
      <Route path="/search/index/:query" exact component={Search} />
      <Route path="/users/course" exact component={Usercourse} />
    </Switch>
  </Router>
);
