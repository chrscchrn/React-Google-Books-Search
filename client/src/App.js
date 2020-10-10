import React, { Component } from "react";
import Nav from "./components/nav";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
import NoMatch from "./pages/nomatch";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav />
          <Switch>
            <Route exact path="/">
              <Saved />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              <NoMatch />
            </Route>
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
