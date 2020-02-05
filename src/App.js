import React from "react";
import { Route } from "react-router-dom";
import "./components/utils/AxiosDefaults";

// Components
import PrivateRoute from "./components/utils/PrivateRoute";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import TestComponent from "./components/TestComponent";
import UserDashboard from "./pages/UserDashboard";
import UserProfileDashboard from "./pages/UserProfileDashboard";
import TeamDashboard from "./pages/TeamDashboard";

// Styles
import "antd/dist/antd.css";
import "./userdash.css";

function App() {
  return (
    <div className="app">

      {/* The two following routes make sure you not see the login/register screen if you're already logged in */}
      <Route path="/register" render={props => localStorage.getItem("token") ? props.history.push('/') : <Register />  } />

      <Route path="/login" render={props => localStorage.getItem("token") ? props.history.push('/') : <Login  /> } />

      <PrivateRoute path="/test" component={TestComponent} />
      
      <PrivateRoute path='/' exact component={UserDashboard} />

      <Route path="/profile" component={UserProfileDashboard} />

      <Route path="/team/:id" component={TeamDashboard} />

    </div>
    );
}

export default App;
