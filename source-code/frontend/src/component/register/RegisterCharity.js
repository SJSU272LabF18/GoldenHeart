import React, { Component } from 'react'
import axios from 'axios';
import { API_ENDPOINT } from '../../data/';

export default class RegisterCharity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            name: '',
            url: '',
            mission: '',
            category: '',
            city: '',
            state: '',
            minage:18,
            maxage: 99,
            age: '0'
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUrl = this.handleUrl.bind(this);
        this.handlemission = this.handlemission.bind(this);
        this.handlecategory = this.handlecategory.bind(this);
        this.handlecity = this.handlecity.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
   
    handleNameChange(event){
        this.setState({ name: event.target.value});
    }
    handleUrl(event){
        this.setState({ url : event.target.value});
    }
    handlemission(event){
        this.setState({ mission : event.target.value});
    }
    handlecategory(event){
        this.setState({ category : event.target.value});
    }
    handlecity(event){
        this.setState({ city: event.target.value});
    }
    handleAge(event){
        this.setState({ age: event.target.value});
        if(event.target.value === "0"){
            this.setState({ minage: 17, maxage: 30});
        } else if(event.target.value === "1"){
            this.setState({ minage: 31, maxage: 43});
        } else if(event.target.value === "2"){
            this.setState({ minage: 44, maxage: 100});
        } else {
            this.setState({ minage: 17, maxage: 100});
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        const requestBody = {
            "email":this.state.email,
            "password":this.state.password,
            "role":"charity",
            "charity_name" : this.state.name,
            "charity_mission": this.state.mission,
            "charity_url": this.state.url,
            "category_id" : 5, 
            "category_name" : "Human Services", 
            "sub_category" : "Human Services", 
            "work_type" : "Human Services", 
            "city": "San Jose",
            "state": "California",
            "latitude": 37.338207,
            "longitude": -121.886330,
            "minage":18,
            "maxage": 99,
            "total_contributions": 0
        }
        axios.post(API_ENDPOINT + '/auth/register/charity', requestBody)
          .then(response => {
            if (response.status === 201) {
                this.props.history.push('/login');
            }
            console.log(response)
      })
    console.log(requestBody)
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
                                        <img src="images/icon/logo.png" alt="Goldenheart"></img>
                                    </a>
                                </div>
                                <div class="login-logo">
                                    <span>
                                        Register your Charity
                            </span>
                                    <hr></hr>
                                </div>
                                <div class="login-form row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Email Address</label>
                                            <input class="au-input au-input--full" type="email" name="email" 
                                            value={this.state.email || ''}
                                            onChange={this.handleEmailChange} 
                                            ></input>
                                        </div>
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input class="au-input au-input--full" type="password" name="password" value={this.state.password || ''} onChange={this.handlePasswordChange}></input>
                                        </div>
                                        <div class="form-group">
                                            <label>Charity Name</label>
                                            <input class="au-input au-input--full" type="text" name="CharityName" value={this.state.name || ''} onChange={this.handleNameChange}></input>
                                        </div>
                                        <div class="form-group">
                                            <label>Charity URL</label>
                                            <input class="au-input au-input--full" type="text" name="CharityURL" value={this.state.url || ''} onChange={this.handleUrl}></input>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Mission</label>
                                            <input class="au-input au-input--full" type="text" name="mission" value={this.state.mission || ''} onChange={this.handlemission}></input>
                                        </div>
                                        <div class="form-group">
                                            <label>City, State</label>
                                            <input class="au-input au-input--full" type="text" name="city" value={this.state.city || ''} onChange={this.handlecity}></input>
                                        </div>
                                        <div class="form-group">
                                            <label>Category</label>
                                            {/* <input class="au-input au-input--full" type="text" name="category" value={this.state.category || ''} onChange={this.handlecategory}></input> */}
                                            <select name="select" id="select" class="form-control">
                                                        <option value="0">International</option>
                                                        <option value="1">Animals and Environment</option>
                                                        <option value="2">Arts, Culture, Humanities</option>
                                                        <option value="3">Health and Education</option>
                                                        <option value="4">Human Services</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Target age group</label>
                                            {/* <input class="au-input au-input--full" type="text" name="state" value={this.state.state || ''} onChange={this.handleAge}></input> */}
                                            <select name="select" id="select" class="form-control" onChange={this.handleAge} value={this.state.age}>
                                                        <option value="0">17-30</option>
                                                        <option value="1">31-43</option>
                                                        <option value="2">44-100</option>
                                                        <option value="3">Undefined</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="login-checkbox">
                                        <label>
                                            <input type="checkbox" name="aggree"></input> Agree the terms and policy
                                    </label>
                                    </div>
                                    <button class="au-btn au-btn--block au-btn--green m-b-20" type="submit" onClick={this.handleSubmit}>register</button>

                                    <div class="register-link">
                                        <p>
                                            Already have account?
                                    <a href="#">Sign In</a>
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
