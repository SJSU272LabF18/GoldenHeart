import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "../Home/Homepage";

import RegisterCharity from "../RegisterCharity/RegisterCharity";
import RegisterBusiness from "../RegisterBusiness/RegisterBusiness";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={HomePage} exact />
          <Route path="/registercharity" component={RegisterCharity} exact />
          <Route path="/registerbusiness" component={RegisterBusiness} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/login" component={Login} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
