import React from "react";
import * as rtl from "@testing-library/react";

// Redux
import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store";
import { store } from "../redux/store";
// import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter as Router } from "react-router-dom";

import App from "../App";

describe("App Component", () => {
	it("should render without crashing", () => {
		rtl.render(
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		);
	});
});
