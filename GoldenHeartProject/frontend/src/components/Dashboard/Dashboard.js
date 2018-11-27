import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import "./Dashboard.css";
import slider11 from "../../Images/slider11.jpeg";
import slider12 from "../../Images/slider12.jpeg";
import slider13 from "../../Images/slider13.jpeg";
class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            newemail: "",
            newpassword: "",
            authFlag: false,
            signedUp: false
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    componentWillMount() {
        this.setState({
            authFlag: false
        });
    }

    handleLogin = e => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        };

        axios.defaults.withCredentials = true;

        axios.post("http://localhost:3001/API", data).then(response => {
            console.log("Status Code : ", response.status);
            if (response.status === 200) {
                this.setState({
                    authFlag: true
                });
            } else {
                this.setState({
                    authFlag: false
                });
            }
        });
    };

    handleSignup = e => {
        e.preventDefault();
        const data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.newemail,
            password: this.state.newpassword
        };

        axios.post("http://localhost:3001/API", data).then(response => {
            if (response.status == 200) {
                this.setState({
                    signedUp: true
                });
            } else {
                this.setState({
                    signedUp: false
                });
            }
        });
    };

    render() {
        return (

            <div>
                <div class="right_col" role="main">

                    <div class="">
                        <div class="page-title">
                            <div class="title_left">
                                <h3>
                                    Plain Page <small>Page subtile </small>
                                </h3>
                            </div>

                            <div class="title_right">
                                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search for..." />
                                        <span class="input-group-btn">
                                            <button class="btn btn-default" type="button">Go!</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="x_panel">
                                    <div class="x_title">
                                        <h2>Page title <small>Page subtile </small></h2>
                                        <ul class="nav navbar-right panel_toolbox">
                                            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                                            <li class="dropdown">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                                    <i class="fa fa-wrench"></i>
                                                </a>
                                                <ul class="dropdown-menu" role="menu">
                                                    <li><a href="#">Settings 1</a></li>
                                                    <li><a href="#">Settings 2</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="close-link"><i class="fa fa-close"></i></a></li>
                                        </ul>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="x_content">



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Dashboard;
