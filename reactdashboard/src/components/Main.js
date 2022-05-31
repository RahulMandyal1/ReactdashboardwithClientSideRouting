import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Articles from "./Articles";
import Books from "./Books";
import Helpandsupport from "./Helpandsupport";
import Homepage from "./Homepage";
import Peoples from "./Peoples";
export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route  path="/articles" component={Articles}/>
        <Route path="/peoples" component={Peoples} />
        <Route  path="/help" component={Helpandsupport}/>
        <Route path="/books" component={Books} />
      </Switch>
    );
  }
}
