import React, { Component } from "react";
import "./RegisterCharity.css";
import { Link } from "react-router-dom";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import HeaderMain from "../Header/HeaderMain";

class RegisterCharity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: window.localStorage.getItem("owner"),
      country: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      area: "",
      name: "",
      description: "",
      goal: "",
      motivation: "",
      charitytype: "",
      website: "",
      images: [],
      imageView: [],
      dbnames: [],
      charityno: "",
      taxno: "",
      legal: "",
      audited: "",
      WelcomeFlag: true,
      LocationFlag: false,
      DetailsFlag: false,
      PhotosFlag: false,
      ValidationFlag: false,
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
      ValidationFlag: false,
      ConfirmationFlag: false
    });
  };

  handleLocationFlag = () => {
    this.setState({
      WelcomeFlag: false,
      LocationFlag: true,
      DetailsFlag: false,
      PhotosFlag: false,
      ValidationFlag: false,
      ConfirmationFlag: false
    });
  };

  handleDetailsFlag = () => {
    this.setState({
      WelcomeFlag: false,
      LocationFlag: false,
      DetailsFlag: true,
      PhotosFlag: false,
      ValidationFlag: false,
      ConfirmationFlag: false
    });
  };

  handlePhotosFlag = () => {
    this.setState({
      WelcomeFlag: false,
      LocationFlag: false,
      DetailsFlag: false,
      PhotosFlag: true,
      ValidationFlag: false,
      ConfirmationFlag: false
    });
  };

  handleValidationFlag = () => {
    this.setState({
      WelcomeFlag: false,
      LocationFlag: false,
      DetailsFlag: false,
      PhotosFlag: false,
      ValidationFlag: true,
      ConfirmationFlag: false
    });
  };

  handleConfirmationFlag = () => {
    this.setState({
      WelcomeFlag: false,
      LocationFlag: false,
      DetailsFlag: false,
      PhotosFlag: false,
      ValidationFlag: false,
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
      country: this.state.country,
      street: this.state.street,

      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      area: this.state.area,
      description: this.state.description,
      goal: this.state.goal,
      motivation: this.state.motivation,
      charitytype: this.state.charitytype,
      website: this.state.website,
      charityno: this.state.charityno,
      taxno: this.state.taxno,
      legal: this.state.legal,
      audited: this.state.audited,
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

              <a href="#" onClick={this.handleValidationFlag}>
                Validation
              </a>
              <a href="#" onClick={this.handleConfirmationFlag}>
                Confirmation
              </a>
            </div>

            <div className="mainform shadow">
              {" "}
              <h5 className="welcometext">
                <span className="textleft">
                  {" "}
                  Welcome to charity registration!{" "}
                </span>
              </h5>
              <p class="lead">Only 4 steps remaining </p>
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

              <a href="#" onClick={this.handleValidationFlag}>
                Validation
              </a>
              <a href="#" onClick={this.handleConfirmationFlag}>
                Confirmation
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

                <div className="form-group box-width m-3">
                  <select className="form-control" id="area">
                    <option value="area" hidden>
                      {" "}
                      Operational Areas{" "}
                    </option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>

                    <option value="WY">Wyoming</option>
                  </select>
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

              <a href="#" onClick={this.handleValidationFlag}>
                Validation
              </a>
              <a href="#" onClick={this.handleConfirmationFlag}>
                Confirmation
              </a>
            </div>

            <div className="mainform">
              <form style={{ padding: "5%" }}>
                <div className="m-3">
                  <p class="lead">Describe your charity</p>
                  <hr color="blue" style={{ border: "1px solid blue" }} />
                </div>
                <br />
                <div className="form-group box-width m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Charity Name"
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
                    placeholder="Description...."
                    maxLength="600"
                  />
                </div>
                <div className="form-group box-width m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="goal"
                    placeholder="What's your goal?"
                    onChange={this.onChange}
                    name="goal"
                  />
                </div>

                <div className="form-group box-width m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="motivation"
                    placeholder="What's your Motivation?"
                    onChange={this.onChange}
                    name="motivation"
                  />
                </div>

                <div className="form-group box-width m-3">
                  <select className="form-control" id="charitytype">
                    <option value="charitytype" hidden>
                      {" "}
                      Type of Charity{" "}
                    </option>
                    <option value="Arts">Arts and culture</option>
                    <option value="Humanrights">Human Rights</option>
                    <option value="Animals">Animals</option>
                    <option value="Family">Family</option>
                    <option value="Education">Education</option>
                    <option value="Environment">Environment</option>
                    <option value="Health">Health</option>
                    <option value="International">International Aid</option>
                    <option value="Religion">Religion</option>
                    <option value="Women">Women welfare</option>
                  </select>
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

              <a href="#" onClick={this.handleValidationFlag}>
                Validation
              </a>
              <a href="#" onClick={this.handleConfirmationFlag}>
                Confirmation
              </a>
            </div>

            <div className="mainform">
              {" "}
              <p class="lead phototext">Add logo for your charity : </p>
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
                  onClick={this.handleValidationFlag}
                >
                  Next
                </a>
              </span>
              <br />
              <hr />
            </div>
          </div>
        </div>
      );
    } else if (this.state.ValidationFlag) {
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

              <a href="#" onClick={this.handleValidationFlag}>
                <span>
                  {" "}
                  <i class="fa fa-angle-right" aria-hidden="true" />
                </span>{" "}
                Validation
              </a>
              <a href="#" onClick={this.handleConfirmationFlag}>
                Confirmation
              </a>
            </div>

            <div className="mainform">
              <form style={{ padding: "5%" }}>
                <div className="m-3">
                  <p class="lead">Validate your charity</p>
                  <hr color="blue" style={{ border: "1px solid blue" }} />
                </div>
                <br />
                <div className="form-group box-width m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="charityno"
                    placeholder="Charity Registration No"
                    onChange={this.onChange}
                    name="charityno"
                  />
                </div>

                <div className="form-group box-width m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="taxno"
                    placeholder="Tax Exempt No"
                    onChange={this.onChange}
                    name="taxno"
                  />
                </div>

                <div className="form-group box-width m-3">
                  <label for="legal"> Are you a 501 C Charity? </label>
                  <select className="form-control" id="legal">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>

                <div className="form-group box-width m-3">
                  <label for="audited"> Audited in the last 6 months? </label>
                  <select className="form-control" id="audited">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>

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
                    <a
                      className="btn btn-outline-primary btn-md mb-3 "
                      href="#"
                      onClick={this.handleConfirmationFlag}
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

              <a href="#" onClick={this.handleValidationFlag}>
                Validation
              </a>
              <a href="#" onClick={this.handleConfirmationFlag}>
                Confirmation
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
                  You can choose to go back if you wish to change any
                  information.
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

export default RegisterCharity;
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
