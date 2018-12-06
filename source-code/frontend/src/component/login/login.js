import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_ENDPOINT } from "../../data";
import { Authentication } from "./../../service/Authentication";
export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value, message: '' });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value, message: '' });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        const requestBody = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(API_ENDPOINT + '/auth/login', requestBody)
            .then(response => {
                if (response.status === 200) {
                    Authentication.setAuthData(response.data.user.id, response.data.token,response.data.user.role, response.data.user.email);
                    if(response.data.user.role === 'buisness'){
                        this.props.history.push('/dashboard-buisness');
                    } else {
                        this.props.history.push('/dashboard-charity');
                    }
                }
                console.log(response)
            });
    }

    render() {
        return (
            <div class="page-wrapper">
                <div class="page-content--bge5">
                    <div class="container">
                        <div class="login-wrap">
                            <div class="login-content">
                                <div class="login-logo">
                                    <a href="#">
                                        <img src="images/icon/logo.png" alt="CoolAdmin"></img>
                                    </a>
                                </div>
                                <div class="login-form">
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="form-group">
                                            <label>Email Address</label>
                                            <input class="au-input au-input--full"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={this.state.email || ''}
                                                onChange={this.handleEmailChange}
                                            ></input>
                                        </div>
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input class="au-input au-input--full" type="password" name="password" placeholder="Password"
                                                value={this.state.password || ''}
                                                onChange={this.handlePasswordChange}>
                                            </input>
                                        </div>
                                        <div class="login-checkbox">
                                            <label>
                                                <input type="checkbox" name="remember"></input>Remember Me
                                    </label>
                                            <label>
                                                <Link to="/login">Forgotten Password?</Link>
                                            </label>
                                        </div>
                                        <button class="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
                                        <div class="social-login-content">
                                            <div class="social-button">
                                                <button class="au-btn au-btn--block au-btn--blue m-b-20">sign in with facebook</button>
                                                <button class="au-btn au-btn--block au-btn--blue2">sign in with twitter</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="register-link">
                                        <p>
                                            Don't you have account?
                                    <a href="#">Sign Up Here</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
