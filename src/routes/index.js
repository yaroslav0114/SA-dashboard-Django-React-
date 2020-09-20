import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Main from "../pages/main";
import About from "../pages/about";
import Research from "../pages/research";
import Contact from "../pages/contact";
import FAQ from "../pages/faq";

const Routes = class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/research" component={Research} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={FAQ} />
      </Switch>
    );
  }
};

export default Routes;
