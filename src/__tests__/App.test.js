import React from "react";
import * as rtl from "@testing-library/react";
import App from "../App";

// Redux
import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store";
import { store } from "../redux/store";
// import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter as Router } from "react-router-dom";

//afterEach(rtl.cleanup); //Use if necessary, see docs
//https://jestjs.io/docs/en/setup-teardown

describe("Main App Demo Test", () => {
	it("renders without crashing", () => {
		rtl.render(
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		);
	});
});