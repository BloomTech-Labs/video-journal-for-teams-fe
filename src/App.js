import React from "react";
import { Route } from "react-router-dom";
import 'antd/dist/antd.css';
import './userdash.css';

// Components
import PrivateRoute from "./components/utils/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import TestComponent from "./components/TestComponent"
import UserDashboard from './pages/UserDashboard';
import UserProfileDashboard from "./pages/UserProfileDashboard";
import UserVideos from "./pages/UserVideos";

function App() {
    return (
        <div className="app">
            
            <Route exact path="/" component={Login} />

            <Route path="/register" component={Register} />

            <PrivateRoute path="/test" component={TestComponent} />

            <Route path="/user-dashboard" component={UserDashboard} />

            <Route path="/profile" component={UserProfileDashboard} />

            <Route path="/videos" component={UserVideos} />
        </div>
    );
}

export default App;
