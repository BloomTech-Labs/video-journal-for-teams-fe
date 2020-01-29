import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import TestComponent from "./components/TestComponent"
import { Button } from "antd";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Button type="primary">YEET</Button>
            
            <Route exact path="/" component={Login} />

            <Route path="/register" component={Register} />

            <PrivateRoute path="/test" component={TestComponent} />
        </div>
    );
}

export default App;
