import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing.js";
import About from "./pages/About";
import Searchs from "./pages/Searchs";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/historySearch" component={Searchs} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
