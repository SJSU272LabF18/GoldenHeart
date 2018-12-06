import React, { Component } from 'react'
import CharityDashboard from './../dashboard/CharityDashboard'
import BuisnessDashboard from './../dashboard/BuisnessDashboard'

// import ApiDocumentation from './../api/ApiDocumentation'
import Login from './../login/login'
import RegisterBuisness from './../register/RegisterBuisness'
import RegisterCharity from './../register/RegisterCharity'
import { Switch, Route, Redirect } from 'react-router-dom'
export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register-buisness" component={RegisterBuisness} />
        <Route exact path="/register-charity" component={RegisterCharity} />
        <Route exact path="/dashboard-charity" component={CharityDashboard} />
        <Route exact path="/dashboard-buisness" component={BuisnessDashboard} />
        </Switch>
        {/* <CharityDashboard></CharityDashboard> */}
        {/* <ApiDocumentation></ApiDocumentation> */}

          {/* <Login></Login> */}
        {/* <Switch> */}
          {/* <Route exact path="/" component={Home} />   */}
          {/* <CharityPrivateRoute path="/Charity/dashboard" component={DashboardCharity} /> */}
          {/* <BuisnessPrivateRoute path="/Buisness/search" component={Search} /> */}
        {/* </Switch> */}

      </div>
      )
  }
}

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//       {...rest}
//       render={props =>
//           (Authentication.isUserLoggedIntoCharityMode()) // boolean expression inside it will determine if the route is allowed or not 
//               ? (
//                   <Component {...props} />
//               ) : (
//                   <Redirect
//                       to={{
//                           pathname: LOGIN_Charity,
//                           state: { from: props.location }
//                       }}
//                   />
//               )
//       }
//   />
// );

// const BuisnessPrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//       {...rest}
//       render={props =>
//           (Authentication.isUserLoggedIntoBuisnessMode()) // boolean expression inside it will determine if the route is allowed or not 
//               ? (
//                   <Component {...props} />
//               ) : (
//                   <Redirect
//                       to={{
//                           pathname: LOGIN_Buisness,
//                           state: { from: props.location }
//                       }}
//                   />
//               )
//       }
//   />
// );