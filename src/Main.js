import React from "react";
import { Switch, Route } from "react-router-dom";
import exComp1 from "./exComp1";
import SignIn from "./SignIn";
import Home from "./Home";
import About from "./About";
import BasicTimePicker from "./BasicTimePicker";
export default function main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/1" component={exComp1} to="/1" />
        <Route path="/about" component={About} />
        <Route path="/signin" component={SignIn} />
        <Route path="/BasicTimePicker" component={BasicTimePicker} />
      </Switch>
    </main>
  );
}
