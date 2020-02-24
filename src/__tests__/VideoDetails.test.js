import React from "react";
import { shallow } from "enzyme";

import { MemoryRouter } from "react-router-dom";

import { VideoDetails } from "../pages/VideoDetails";

describe("VideoDetails Page", () => {
	test("should render without crashing", () => {
		shallow(
			<MemoryRouter>
				<VideoDetails />
			</MemoryRouter>
		);
	});
});
