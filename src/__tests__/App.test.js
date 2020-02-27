import React from "react";

import { shallow } from "enzyme";

import { MemoryRouter } from "react-router-dom";

import App from "../App";

describe("App Component", () => {
	it("should render self without error", () => {
		shallow(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
	});
});
