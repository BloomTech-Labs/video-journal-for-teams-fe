import React from "react";

import { shallow } from "enzyme";

import { MemoryRouter } from "react-router-dom";

import { VideoDetails } from "../pages/VideoDetails";

describe("<VideoDetails>", () => {
	test("should render self without error", () => {
		shallow(
			<MemoryRouter>
				<VideoDetails />
			</MemoryRouter>
		);
	});
});
