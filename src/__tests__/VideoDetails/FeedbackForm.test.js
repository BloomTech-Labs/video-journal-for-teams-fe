import React from "react";

import { shallow, mount } from "enzyme";

import { FeedbackForm } from "../../components/VideoDetails/FeedbackForm";

describe("FeedbackForm Component", () => {
	test("should render without crashing", () => {
		shallow(<FeedbackForm />);
	});

	test("should have table", () => {
		const wrapper = mount(<FeedbackForm />);
	});

	test("should have 2 dummy posts", () => {
		const wrapper = mount(<FeedbackForm />);
	});
});
