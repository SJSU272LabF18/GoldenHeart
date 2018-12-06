import React, { Component } from 'react'

export default class RegisterBuisness extends Component {
  render() {
      document.title = "Register Buisness"
    return (
        <div class="page-wrapper">
        <div class="page-content--bge5">
            <div class="container">
                <div class="login-wrap">
                    <div class="login-content">
                        <div class="login-logo">
                            <a href="#">
                                <img src="images/icon/logo.png" alt="GOLDENHEART"></img>
                            </a>
                        </div>
                        <div class="login-logo">
                            <span>
                                Register your Buisness
                            </span>
                            <hr></hr>
                        </div>
                        <div class="login-form">
                            <form action="" method="post">
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input class="au-input au-input--full" type="email" name="email" placeholder="Email"></input>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input class="au-input au-input--full" type="password" name="password" placeholder="Password"></input>
                                </div>
                                <div class="form-group">
                                    <label>Buisness Name</label>
                                    <input class="au-input au-input--full" type="text" name="BuisnessName" placeholder="Name"></input>
                                </div>
                                <div class="form-group">
                                    <label>Website</label>
                                    <input class="au-input au-input--full" type="text" name="BuisnessName" placeholder="URL"></input>
                                </div>
                                
                                <div class="login-checkbox">
                                    <label>
                                        <input type="checkbox" name="aggree"></input> Agree the terms and policy
                                    </label>
                                </div>
                                <button class="au-btn au-btn--block au-btn--green m-b-20" type="submit">register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
  }
}
