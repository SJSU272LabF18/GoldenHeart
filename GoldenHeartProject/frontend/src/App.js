import React, { Component } from "react";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Provider } from "react-redux";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div className="App">
            <BrowserRouter>
              <div>
                <Main />
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
