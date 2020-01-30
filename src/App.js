import React from "react";
import { Button } from "antd";
import "./App.css";

import TestDash from './components/TestDash';

function App() {
  return (
    <div className="app">
      <TestDash />
      {/* DONT REMOVE BELOW */}
      {/* <Button type="primary">YEET</Button> */}
    </div>
  );
}

export default App;
