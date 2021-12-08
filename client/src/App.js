import "./App.scss";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import jwt_decode from "jwt-decode";

class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    const token = sessionStorage.getItem("token");
    if (token) {
      this.setState({ currentUser: jwt_decode(token) });
    }
  }

  handleLoginSuccess = (user) => {
    console.log(user);
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    console.log("handleLogout on App");
    sessionStorage.removeItem("token");
    this.setState({
      currentUser: null,
    });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar user={this.state.currentUser} />

          <Switch>
            <Route
              path={"/login"}
              render={(routerProps) => (
                <Login
                  {...routerProps}
                  onLoginSuccess={(user) => {
                    this.handleLoginSuccess(user);
                  }}
                />
              )}
            />
            <Route
              path={"/logout"}
              render={(routerProps) => (
                <Logout
                  {...routerProps}
                  handleLogout={() => {
                    this.handleLogout();
                  }}
                />
              )}
            />

            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
