import logo from "./logo.svg";
import "./App.scss";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/websites/:id"
              render={(...reactRouterDomProps) => {
                return <Home {...reactRouterDomProps} />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
