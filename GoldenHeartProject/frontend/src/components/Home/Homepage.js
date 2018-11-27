import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import "./Homepage.css";
import slider11 from "../../Images/slider11.jpeg";
import slider12 from "../../Images/slider12.jpeg";
import slider13 from "../../Images/slider13.jpeg";
class HomePage extends React.Component {
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
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="index.html"><span style={{ color: "gold" }}>Golden</span>Heart &reg; </a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="services.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Register
              </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                    <a class="dropdown-item" href="portfolio-1-col.html">Register a Charity</a>
                    <a class="dropdown-item" href="portfolio-2-col.html">Register a Business</a>
                    <a class="dropdown-item" href="portfolio-3-col.html">3 Column Portfolio</a>
                    <a class="dropdown-item" href="portfolio-4-col.html">4 Column Portfolio</a>
                    <a class="dropdown-item" href="portfolio-item.html">Single Portfolio Item</a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Login
              </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                    <a class="dropdown-item" href="">Login as Charity</a>
                    <a class="dropdown-item" href="blog-home-2.html">Login as Business</a>
                    <a class="dropdown-item" href="blog-post.html">Blog Post</a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Other Pages
              </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                    <a class="dropdown-item" href="full-width.html">Full Width Page</a>
                    <a class="dropdown-item" href="sidebar.html">Sidebar Page</a>
                    <a class="dropdown-item" href="faq.html">FAQ</a>
                    <a class="dropdown-item" href="404.html">404</a>
                    <a class="dropdown-item" href="pricing.html">Pricing Table</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">

              <div class="carousel-item active" style={{ "background-image": "url('../../Images/slider11.jpeg') " }} >
                <img src={slider11} className="sliderimage" alt="image" />
                <div class="carousel-caption d-none d-md-block">
                  <h3 className="slidertext">Join Forces And Help The World!</h3>
                  <p className="slidertext">We Bring Charities And Businesses Together To Reach The Community Of Samaritans</p>
                </div>
              </div>

              <div class="carousel-item" style={{ "background-image": "url('http://placehold.it/1900x1080') " }} >
                <img src={slider12} className="sliderimage" alt="image" />
                <div class="carousel-caption d-none d-md-block">
                  <h3 className="slidertext">Make A Commitment!!</h3>
                  <p className="slidertext">We Will Help Your Business Give Back To The Community!</p>
                </div>
              </div>

              <div class="carousel-item" style={{ "background-image": "url('http://placehold.it/1900x1080') }" }} >
                <img src={slider13} className="sliderimage" alt="image" />

                <div class="carousel-caption d-none d-md-block">
                  <h3 className="slidertext">Reach Wider Audience</h3>
                  <p className="slidertext">We're In The Business Of Helping You Make Your Charity Known</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

        </header>


        <div class="container">

          <h1 class="my-4">Welcome to GoldenHeart</h1>

          <div class="row">
            <div class="col-lg-4 mb-4">
              <div class="card h-100">
                <h4 class="card-header">Card Title</h4>
                <div class="card-body">
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card h-100">
                <h4 class="card-header">Card Title</h4>
                <div class="card-body">
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-4">
              <div class="card h-100">
                <h4 class="card-header">Card Title</h4>
                <div class="card-body">
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          </div>



          <h2>Portfolio Heading</h2>

          <div class="row">
            <div class="col-lg-4 col-sm-6 portfolio-item">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Project One</a>
                  </h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 portfolio-item">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Project Two</a>
                  </h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 portfolio-item">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Project Three</a>
                  </h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 portfolio-item">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Project Four</a>
                  </h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 portfolio-item">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Project Five</a>
                  </h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 portfolio-item">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Project Six</a>
                  </h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>
                </div>
              </div>
            </div>
          </div>



          <div class="row">
            <div class="col-lg-6">
              <h2>Modern Business Features</h2>
              <p>The Modern Business template by Start Bootstrap includes:</p>
              <ul>
                <li>
                  <strong>Bootstrap v4</strong>
                </li>
                <li>jQuery</li>
                <li>Font Awesome</li>
                <li>Working contact form with validation</li>
                <li>Unstyled page elements for easy customization</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
            </div>
            <div class="col-lg-6">
              <img class="img-fluid rounded" src="http://placehold.it/700x450" alt="" />
            </div>
          </div>


          <hr />


          <div class="row mb-4">
            <div class="col-md-8">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
            </div>
            <div class="col-md-4">
              <a class="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
            </div>
          </div>

        </div>



        <footer class="py-5 bg-dark">
          <div class="container">
            <p class="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
          </div>

        </footer>
      </div>

    );
  }
}

export default HomePage;
