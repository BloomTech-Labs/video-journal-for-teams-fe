import React from "react";
import { Route } from "react-router-dom";
import { Button } from "antd";
import "./App.css";

// Components
import PrivateRoute from "./components/utils/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import TestComponent from "./components/TestComponent"
import UserDashboard from './components/UserDashboard';

function App() {
    return (
        <div className="app">
            {/* This button below was showing up on all routes */}
            {/* <Button type="primary">YEET</Button> */}
            
            <Route exact path="/" component={Login} />

            <Route path="/register" component={Register} />

            <PrivateRoute path="/test" component={TestComponent} />

            <Route path="/test-user-dashboard" component={UserDashboard} />
        </div>
    );
}

export default App;
