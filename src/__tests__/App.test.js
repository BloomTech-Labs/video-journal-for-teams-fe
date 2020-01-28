import React from "react";
import * as rtl from "@testing-library/react";
import App from "../App";

//afterEach(rtl.cleanup); //Use if necessary, see docs
//https://jestjs.io/docs/en/setup-teardown

describe("Main App Demo Test", () => {
  it("renders without crashing", () => {
    rtl.render(<App />);
  });
});
