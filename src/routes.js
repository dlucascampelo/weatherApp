import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing.js";
import About from "./pages/About";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
