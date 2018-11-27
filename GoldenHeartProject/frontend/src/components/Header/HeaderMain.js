import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cookie from "react-cookies";
import usflag from "../../Images/usflag.png";
import house from "../../Images/house.svg";
import charity from "../../Images/charity.png";
class HeaderMain extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout = () => {
    window.localStorage.clear();
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light margin">
          <Link className="navbar-brand mb-0 h1" to="/homeownerredux">
            <h3>GoldenHeart &reg; </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li>
                {" "}
                <img src={usflag} class="flagcrop" alt="no pic" />{" "}
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="#">
                  United States <span className="sr-only">(current)</span>
                </a>
              </li>

              <li>
                {" "}
                <a className="nav-link" href="/ownermessaging">
                  <i style={{ "margin-right": "6px" }} class="fa fa-envelope" />
                  Contact us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {window.localStorage.getItem("owner")}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    className="dropdown-item nav-text"
                    to="/ownerdashboardredux"
                  >
                    Owner Dashboard
                  </Link>

                  <Link
                    className="dropdown-item nav-text"
                    to="/ownerprofileredux"
                  >
                    My Profile
                  </Link>
                  <Link className="dropdown-item nav-text" to="#">
                    Account Settings
                  </Link>
                  <Link
                    onClick={this.handleLogout}
                    className="dropdown-item nav-text"
                    to="/"
                  >
                    Log out
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Help
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Visit Help Center
                  </a>
                </div>
              </li>
              <li>
                <Link
                  className="btn btn-outline-success"
                  to="/PropertyNewRedux"
                >
                  Donate
                </Link>
              </li>
              <li>
                {" "}
                <img src={charity} class="housecrop" alt="no pic" />{" "}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default HeaderMain;
