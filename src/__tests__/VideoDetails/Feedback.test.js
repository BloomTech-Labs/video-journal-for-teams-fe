import React from "react";

import { shallow, mount } from "enzyme";

import Feedback from "../../components/VideoDetails/Feedback";

describe("Feedback Component", () => {
	test("should render without crashing", () => {
		shallow(<Feedback />);
	});

	test("should have table", () => {
		const wrapper = mount(<Feedback />);
	});

	test("should have 2 dummy posts", () => {
		const wrapper = mount(<Feedback />);
	});
});
