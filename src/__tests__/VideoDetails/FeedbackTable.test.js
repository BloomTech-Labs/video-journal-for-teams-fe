import React from "react";

import { shallow, mount } from "enzyme";

import FeedbackTable from "../../components/VideoDetails/FeedbackTable";

describe("<FeedbackTable>", () => {
	const feedback = [
		{
			id: 1,
			owner_name: "John Doe",
			post: "This is John's post.",
		},
		{
			id: 2,
			owner_name: "Jane Doe",
			post: "This is Jane's post.",
		},
	];

	test("should render without crashing", () => {
		shallow(<FeedbackTable feedback={feedback} />);
	});

	test("should have table", () => {
		const wrapper = mount(<FeedbackTable feedback={feedback} />);
		expect(wrapper.exists("table")).toBe(true);
	});

	test("should have 2 dummy posts", () => {
		const wrapper = mount(<FeedbackTable feedback={feedback} />);
		expect(wrapper.find("p").length).toBe(2);
	});
});
