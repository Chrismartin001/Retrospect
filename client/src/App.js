import logo from "./logo.svg";
import "./App.scss";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

class App extends Component {
  state = {
    isSignedUp: false,
    isLoggedIn: false,
    isLoginError: false,
    errorMessage: "",
  };

  signup = (e) => {
    e.preventDefault();
    const { username, name, password } = this.signUpForm;
  };

  login = (e) => {
    e.preventDefault();
    const { username, password } = this.loginForm;
  };

  renderSignUp() {
    return (
      <div>
        <h1>SignUp</h1>
        <form ref={(form) => (this.signUpForm = form)}>
          <div className="form-group">
            Username: <input type="text" name="username" />
          </div>
          <div className="form-group">
            Name: <input type="text" name="name" />
          </div>
          <div className="form-group">
            Password: <input type="password" name="password" />
          </div>
          <button className="btn btn-primary" onClick={this.signup}>
            Signup
          </button>
        </form>
      </div>
    );
  }

  renderLogin = () => {
    const { isLoginError, errorMessage } = this.state;
    return (
      <div>
        <h1>Login</h1>
        {isLoginError && <label style={{ color: "red" }}>{errorMessage}</label>}
        <form ref={(form) => (this.loginForm = form)}>
          <div className="form-group">
            Username: <input type="text" name="username" />
          </div>
          <div className="form-group">
            Password: <input type="password" name="password" />
          </div>
          <button className="btn btn-primary" onClick={this.login}>
            Login
          </button>
        </form>
      </div>
    );
  };

  render() {
    const { isLoggedIn, isSignedUp } = this.state;

    if (!isSignedUp) return this.renderSignUp();
    if (!isLoggedIn) return this.renderLogin();

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
