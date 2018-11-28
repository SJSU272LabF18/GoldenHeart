import React, { Component } from 'react'
import CharityDashboard from './../dashboard/CharityDashboard'
import ApiDocumentation from './../api/ApiDocumentation'
import { Switch, Route, Redirect } from 'react-router-dom'
export default class Main extends Component {
  render() {
    return (
      <div>
        {/* <CharityDashboard></CharityDashboard> */}
        {/* <ApiDocumentation></ApiDocumentation> */}
        <Switch>
          {/* <Route exact path="/" component={Home} />   */}
          {/* <CharityPrivateRoute path="/Charity/dashboard" component={DashboardCharity} /> */}
          {/* <BuisnessPrivateRoute path="/Buisness/search" component={Search} /> */}
        </Switch>

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