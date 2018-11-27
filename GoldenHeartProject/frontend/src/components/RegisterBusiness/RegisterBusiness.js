import React, { Component } from "react";
import "./RegisterBusiness.css";
import { Link } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import HeaderMain from "../Header/HeaderMain";

class RegisterBusiness extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: window.localStorage.getItem("owner"),
      name: "",
      taxidno: "",
      description: "",
      country: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      businesstype: "",
      website: "",
      images: [],
      imageView: [],
      dbnames: [],
      WelcomeFlag: true,
      LocationFlag: false,
      DetailsFlag: false,
      PhotosFlag: false,

      ConfirmationFlag: false
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onImageChange = e => {
    console.log("Inside on image change ", e.target.files);

    this.setState({
      images: e.target.files
    });
  };

  onSubmit = e => {
    e.preventDefault();

    let formData = new FormData();
    const files = this.state.images;

    for (var index = 0; index < files.length; index++) {
      formData.append("files", files[index]);
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios
      .post("http://localhost:5000/upload", formData, config)
      .then(response => {
        if (response.status == 200) console.log("Uploaded successfully");
        window.alert("Upload successful");
      });

    this.handleGetPhoto();
  };

  //get photo

  handleGetPhoto = e => {
    console.log("IMAGES in this state", this.state.images);

    var fileNames = [];
    for (var index = 0; index < this.state.images.length; index++) {
      fileNames[index] = this.state.images[index].name;
    }

    console.log("file name array first element", fileNames[0]);
    console.log("State image array first element", this.state.images[0].name);

    axios.post("http://localhost:5000/download/" + fileNames).then(response => {
      let imagePreview = [];
      for (var index = 0; index < response.data.length; index++) {
        imagePreview[index] = "data:image/jpg;base64, " + response.data[index];
      }

      this.setState({
        imageView: imagePreview
      });

      console.log("Retrieved images:", this.state.imageView);
    });
  };

  //get photo ends

  handleWelcomeFlag = () => {
    this.setState({
      WelcomeFlag: true,
      LocationFlag: false,
      DetailsFlag: false,
      PhotosFlag: false,

      ConfirmationFlag: false
    });
  };

  handleLocationFlag = () => {
    this.setState({
      WelcomeFlag: false,
      LocationFlag: true,
      DetailsFlag: false,
      PhotosFlag: false,

      ConfirmationFlag: false
    });
  };

  handleDetailsFlag = () => {
    this.setState({
      WelcomeFlag: false,
      LocationFlag: false,
      DetailsFlag: true,
      PhotosFlag: false,

      ConfirmationFlag: false
    });
  };

  handlePhotosFlag = () => {
    this.setState({
      WelcomeFlag: false,
      LocationFlag: false,
      DetailsFlag: false,
      PhotosFlag: true,

      ConfirmationFlag: false
    });
  };

  handleConfirmationFlag = () => {
    this.setState({
      WelcomeFlag: false,
      LocationFlag: false,
      DetailsFlag: false,
      PhotosFlag: false,

      ConfirmationFlag: true
    });
  };

  handleProperty = e => {
    e.preventDefault();

    console.log("handleProperty images ", this.state.images);
    console.log("handleProperty images ", this.state.images[0].name);

    // var imagenames = "";
    // var str2 = "";
    // var str = "";
    // for (var index = 0; index < this.state.images.length; index++) {
    //   // if (this.state.images.length < 2) {
    //   //   var str2 = imagenames.concat(this.state.images[index].name);
    //   //   console.log("str2", str2);
    //   // } else {
    //   str = str + str.concat(this.state.images[index].name);
    //   str2 = str.concat(",");
    //   str = str2;
    //   console.log("str2", str2);
    //   // }
    // }

    var fileNames = [];
    for (var index = 0; index < this.state.images.length; index++) {
      fileNames[index] = this.state.images[index].name;
    }
    var str2 = "";
    str2 = fileNames.toString();

    const data = {
      name: this.state.name,
      taxidno: this.state.taxidno,
      description: this.state.description,
      country: this.state.country,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      businesstype: this.state.businesstype,
      website: this.state.website,
      images: str2
    };

    axios.defaults.withCredentials = true;

    this.props.listProperty(data);
  };

  render() {
    console.log("REDUX PROPS DATA: ", this.props.data);
    console.log("FLAG : ", this.props.listed);

    // if (this.props.listed) {
    //   console.log("Listed successfully");
    //   window.alert("Property Listed Successfuly");
    //   <Redirect to="/homeownerredux" />;
    // }
    const { imagedescription, selectedFile } = this.state;
    console.log(window.localStorage.getItem("username"));

    let redirectVar = null;
    if (this.state.propertyPosted) {
      window.alert("Property posted successfully!");
      redirectVar = <Redirect to="/homeownerredux" />;
    }

    if (this.state.WelcomeFlag) {
      return (
        <div className="div">
          {/* {cookieCheck} */}
          {redirectVar}
          <HeaderMain />
          <div
            className="container lateststyle"
            style={{ "margin-left": "10%" }}
          >
            <div className="sidebar">
              <a href="#" onClick={this.handleWelcomeFlag}>
                <span>
                  {" "}
                  <i class="fa fa-angle-right" aria-hidden="true" />
                </span>{" "}
                Welcome
              </a>
              <a href="#" onClick={this.handleLocationFlag}>
                Location
              </a>
              <a href="#" onClick={this.handleDetailsFlag}>
                Details
              </a>

              <a href="#" onClick={this.handlePhotosFlag}>
                Photo
              </a>
            </div>

            <div className="mainform shadow">
              {" "}
              <h5 className="welcometext">
                <span className="textleft"> Welcome to registration!! </span>
              </h5>
              <p class="lead">Only 3 steps remaining </p>
              <span>
                {" "}
                <a
                  className="btn btn-outline-primary btn-md mb-3"
                  href="#"
                  onClick={this.handleLocationFlag}
                >
                  Continue
                </a>
              </span>
            </div>
          </div>
        </div>
      );
    } else if (this.state.LocationFlag) {
      return (
        <div className="div">
          {/* {localStorage.getItem("user") ? <NavbarMain /> : <NavbarMainOwner />} */}
          <HeaderMain />
          <div
            className="container lateststyle"
            style={{ "margin-left": "10%" }}
          >
            <div className="sidebar">
              <a href="#" onClick={this.handleWelcomeFlag}>
                Welcome
              </a>
              <a href="#" onClick={this.handleLocationFlag}>
                <span>
                  {" "}
                  <i class="fa fa-angle-right" aria-hidden="true" />
                </span>{" "}
                Location
              </a>
              <a href="#" onClick={this.handleDetailsFlag}>
                Details
              </a>

              <a href="#" onClick={this.handlePhotosFlag}>
                Photo
              </a>
            </div>

            <div className="mainform">
              <form style={{ padding: "5%" }}>
                <div className="m-3">
                  <p class="lead">Where are you based? </p>
                  <hr color="blue" style={{ border: "1px solid blue" }} />
                </div>
                <br />
                <div className="form-group box-width m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="Country"
                    onChange={this.onChange}
                    name="country"
                  />
                </div>

                <div className="form-group box-width m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="street"
                    placeholder="Street Address"
                    onChange={this.onChange}
                    name="street"
                  />
                </div>

                <div className="form-group box-width m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="City"
                    onChange={this.onChange}
                    name="city"
                  />
                </div>

                <div className="form-group box-width m-3">
                  <select className="form-control" id="state">
                    <option value="state" hidden>
                      {" "}
                      State{" "}
                    </option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>

                <div className="form-group box-width m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="zipcode"
                    placeholder="Zip Code"
                    onChange={this.onChange}
                    name="zipcode"
                  />
                </div>

                <div style={{ "margin-top": "5%" }}>
                  <span className="prev-next">
                    {" "}
                    <a
                      className="btn btn-outline-primary btn-md mb-3 "
                      href="#"
                      onClick={this.handleWelcomeFlag}
                    >
                      Go back
                    </a>
                  </span>
                  <span className="prev-next">
                    {" "}
                    <a
                      className="btn btn-outline-primary btn-md mb-3 "
                      href="#"
                      onClick={this.handleDetailsFlag}
                    >
                      Next
                    </a>
                  </span>
                </div>
                <br />
                <hr />
              </form>
            </div>
          </div>
        </div>
      );
    } else if (this.state.DetailsFlag) {
      return (
        <div className="div">
          {/* {localStorage.getItem("user") ? <NavbarMain /> : <NavbarMainOwner />} */}
          <HeaderMain />
          <div
            className="container lateststyle"
            style={{ "margin-left": "10%" }}
          >
            <div className="sidebar">
              <a href="#" onClick={this.handleWelcomeFlag}>
                Welcome
              </a>
              <a href="#" onClick={this.handleLocationFlag}>
                Location
              </a>
              <a href="#" onClick={this.handleDetailsFlag}>
                <span>
                  {" "}
                  <i class="fa fa-angle-right" aria-hidden="true" />
                </span>{" "}
                Details
              </a>

              <a href="#" onClick={this.handlePhotosFlag}>
                Photo
              </a>
            </div>

            <div className="mainform">
              <form style={{ padding: "5%" }}>
                <div className="m-3">
                  <p class="lead">Describe your Business</p>
                  <hr color="blue" style={{ border: "1px solid blue" }} />
                </div>
                <br />

                <div className="form-group box-width m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="taxidno"
                    placeholder="Federal Tax ID No"
                    onChange={this.onChange}
                    name="taxidno"
                  />
                </div>

                <div className="form-group box-width m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Business Name"
                    onChange={this.onChange}
                    name="name"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control box-width m-3 input-sm"
                    rows="6"
                    cols="20"
                    name="description"
                    id="description"
                    onChange={this.onChange}
                    placeholder="Business Description...."
                    maxLength="600"
                  />
                </div>

                <div className="form-group box-width m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="website"
                    placeholder="What's your website?"
                    onChange={this.onChange}
                    name="website"
                  />
                </div>

                <div className="form-group box-width m-3">
                  <select className="form-control" id="charitytype">
                    <option value="charitytype" hidden>
                      {" "}
                      Type of Business{" "}
                    </option>
                    <option value="LLC">Arts and culture</option>
                    <option value="Coorporation">Human Rights</option>
                    <option value="Partnership">Animals</option>
                    <option value="Non-Profit">Family</option>
                  </select>
                </div>

                <div style={{ "margin-top": "5%" }}>
                  <span className="prev-next">
                    {" "}
                    <a
                      className="btn btn-outline-primary btn-md mb-3 "
                      href="#"
                      onClick={this.handleLocationFlag}
                    >
                      Go back
                    </a>
                  </span>
                  <span className="prev-next">
                    {" "}
                    <a
                      className="btn btn-outline-primary btn-md mb-3 "
                      href="#"
                      onClick={this.handlePhotosFlag}
                    >
                      Next
                    </a>
                  </span>
                </div>
                <br />
                <hr />
              </form>
            </div>
          </div>
        </div>
      );
    } else if (this.state.PhotosFlag) {
      return (
        <div className="div">
          <HeaderMain />

          <div
            className="container lateststyle"
            style={{ "margin-left": "10%" }}
          >
            <div className="sidebar">
              <a href="#" onClick={this.handleWelcomeFlag}>
                Welcome
              </a>
              <a href="#" onClick={this.handleLocationFlag}>
                Location
              </a>
              <a href="#" onClick={this.handleDetailsFlag}>
                Details
              </a>

              <a href="#" onClick={this.handlePhotosFlag}>
                <span>
                  {" "}
                  <i class="fa fa-angle-right" aria-hidden="true" />
                </span>{" "}
                Photo
              </a>
            </div>

            <div className="mainform">
              {" "}
              <p class="lead phototext">Add your Business logo : </p>
              <hr color="blue" style={{ border: "1px solid blue" }} />
              {/* IMAGE UPLOAD start */}
              <div>
                <form
                  style={{ padding: "5%" }}
                  onSubmit={this.onSubmit}
                  encType="multipart/form-data"
                >
                  <input
                    type="file"
                    name="selectedFile"
                    multiple
                    onChange={this.onImageChange}
                  />
                  <button
                    className="btn btn-outline-success"
                    style={{ "margin-bottom": "1%" }}
                    type="submit"
                  >
                    Upload logo
                  </button>
                  <br />

                  <div>
                    <img
                      src={
                        this.state.imageView[0]
                          ? this.state.imageView[0]
                          : require("../../Images/white.png")
                      }
                      style={{ height: "100px", width: "100px" }}
                    />
                  </div>
                </form>
              </div>
              {/* IMAGE UPLOAD end */}
              <br />
              <span className="prev-next">
                {" "}
                <a
                  className="btn btn-outline-primary btn-md mb-3 "
                  href="#"
                  onClick={this.handleDetailsFlag}
                >
                  Go back
                </a>
              </span>
              <span className="prev-next">
                {" "}
                <a
                  className="btn btn-outline-primary btn-md mb-3 "
                  href="#"
                  onClick={this.handleConfirmationFlag}
                >
                  REGISTER
                </a>
              </span>
              <br />
              <hr />
            </div>
          </div>
        </div>
      );
    } else if (this.state.ConfirmationFlag) {
      return (
        <div className="div">
          {/* {localStorage.getItem("user") ? <NavbarMain /> : <NavbarMainOwner />} */}
          <HeaderMain />
          <div
            className="container lateststyle"
            style={{ "margin-left": "10%" }}
          >
            <div className="sidebar">
              <a href="#" onClick={this.handleWelcomeFlag}>
                Welcome
              </a>
              <a href="#" onClick={this.handleLocationFlag}>
                Location
              </a>
              <a href="#" onClick={this.handleDetailsFlag}>
                Details
              </a>

              <a href="#" onClick={this.handlePhotosFlag}>
                Photo
              </a>
            </div>

            <div className="mainform">
              <form style={{ padding: "5%" }}>
                <div className="m-3">
                  <p class="lead">Confirmation</p>
                  <hr color="blue" style={{ border: "1px solid blue" }} />
                </div>
                <br />
                <p>
                  {" "}
                  Confirm Registration? You can choose to go back if you wish to
                  review or change any information.
                </p>
                <div style={{ "margin-top": "5%" }}>
                  <span className="prev-next">
                    {" "}
                    <a
                      className="btn btn-outline-primary btn-md mb-3 "
                      href="#"
                      onClick={this.handlePhotosFlag}
                    >
                      Go back
                    </a>
                  </span>
                  <span className="prev-next">
                    {" "}
                    <button
                      type="submit"
                      className="btn btn-success btn-md mb-3"
                      onClick={this.handleProperty}
                    >
                      Register
                    </button>
                  </span>
                </div>
                <div className="ml-10" />

                <br />
                <hr />
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default RegisterBusiness;
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
