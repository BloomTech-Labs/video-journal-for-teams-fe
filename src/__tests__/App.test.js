import React from "react";
// import * as rtl from "@testing-library/react";
import { shallow } from "enzyme";

// Redux
// import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store";
// import { store } from "../redux/store";
// import { PersistGate } from 'redux-persist/lib/integration/react';
import { MemoryRouter } from "react-router-dom";

import App from "../App";

describe("App Component", () => {
	it("should render without crashing", () => {
		shallow(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
	});
});
