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
import UserVideos from "./pages/UserVideos";
import TeamDashboard from "./pages/TeamDashboard";

// Styles
import "antd/dist/antd.css";
import "./userdash.css";

function App() {
	return (
		<div className="app">
			<Route exact path="/" component={Login} />

			<Route path="/register" component={Register} />

			<PrivateRoute path="/test" component={TestComponent} />

			<PrivateRoute path="/user-dashboard" component={UserDashboard} />

			<Route path="/profile" component={UserProfileDashboard} />

			<Route path="/team/:id" component={TeamDashboard} />

      <Route path="/videos" />

    </div>
    );

}

export default App;
