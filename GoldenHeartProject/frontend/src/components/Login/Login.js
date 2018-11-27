import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import HeaderMain from "../Header/HeaderMain";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {


            email: "",
            password: "",

            authFlag: false
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



    render() {


        return (

            <div className="div">
                {/* {localStorage.getItem("user") ? <NavbarMain /> : <NavbarMainOwner />} */}
                <HeaderMain />


                <div className="mainformnew">
                    <form style={{ padding: "5%" }}>
                        <div className="m-3">
                            <p class="lead">Please sign in to continue </p>
                            <hr color="blue" style={{ border: "1px solid blue" }} />
                        </div>
                        <br />
                        <div className="form-group box-widthnew m-3">
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                onChange={this.onChange}
                                name="email"
                            />
                        </div>

                        <div className="form-group box-widthnew m-3">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                onChange={this.onChange}
                                name="password"
                            />
                        </div>



                        <div style={{ "margin-top": "5%" }}>


                            {" "}
                            <button
                                className="btn btn-outline-primary btn-md mb-3 loginbutton"

                                onClick={this.handleLogin}
                            >
                                Login
                    </button>

                        </div>
                        <br />
                        <hr />
                    </form>
                </div>
            </div>

        );


    }
}

export default Login;
// const mapStateToProps = state => {
//   console.log("Inside list property map state to props: ", state);

//   return {
//     data: state.reducer.data,
//     listed: state.reducer.listed
//   };
// };

// const mapDispatchStateToProps = dispatch => {
//   console.log("Inside list property map dispatch to props");
//   return {
//     listProperty: data => {
//       axios.post("http://localhost:5000/listproperty", data).then(response => {
//         console.log(response.data);
//         window.alert("Property posted successfully");
//         dispatch({
//           type: "LIST_PROPERTY",
//           payload: response.data
//         });
//       });

//       console.log("List property Action dispatched");
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchStateToProps
// )(PropertyNewRedux);
